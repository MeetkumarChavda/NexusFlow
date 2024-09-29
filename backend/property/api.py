from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken 
from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationsListSerializer
from useraccount.models import User

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    """
    Retrieve a list of properties based on various filters.

    This endpoint returns a list of properties, optionally filtered by
    criteria such as landlord, country, category, number of guests,
    bedrooms, and bathrooms. It also checks for favorite properties
    for the authenticated user if a token is provided.

    Args:
        request (HttpRequest): The HTTP request object containing query parameters.

    Returns:
        JsonResponse: A JSON response containing the list of properties and user favorites.
    """
    # Auth: Attempt to authenticate user from the token in the request header

    try:
        token = request.META['HTTP_AUTHORIZATION'].split('Bearer ')[1]
        token = AccessToken(token)
        user_id = token.payload['user_id']
        user = User.objects.get(pk=user_id)
    except Exception as e:
        user = None
    #
    #
    favorites = []
    properties = Property.objects.all()

    # Extract filters from query parameters
    is_favorites = request.GET.get('is_favorites','')
    landlord_id=request.GET.get('landlord_id','')
    country = request.GET.get('country', '')
    category = request.GET.get('category', '')
    checkin_date = request.GET.get('checkIn', '')
    checkout_date = request.GET.get('checkOut', '')
    bedrooms = request.GET.get('numBedrooms', '')
    guests = request.GET.get('numGuests', '')
    bathrooms = request.GET.get('numBathrooms', '')
    # print('country', country)
    
    # Handle date filters to exclude booked properties
    if checkin_date and checkout_date:
        exact_matches = Reservation.objects.filter(start_date=checkin_date) | Reservation.objects.filter(end_date=checkout_date)
        overlap_matches = Reservation.objects.filter(start_date__lte=checkout_date, end_date__gte=checkin_date)
        all_matches = []
        for reservation in exact_matches | overlap_matches:
            all_matches.append(reservation.property_id)
        
        properties = properties.exclude(id__in=all_matches)
    
    # Apply additional filters based on user input
    if landlord_id:
        properties =properties.filter(landlord_id=landlord_id)
        
    if is_favorites:
        properties = properties.filter(favorited__in=[user])
    
    if guests:
        properties = properties.filter(guests__gte=guests)
    
    if bedrooms:
        properties = properties.filter(bedrooms__gte=bedrooms)
    
    if bathrooms:
        properties = properties.filter(bathrooms__gte=bathrooms)
    
    if country:
        properties = properties.filter(country=country)
    
    if category and category != 'undefined':
        properties = properties.filter(category=category)
    #
    # Retrieve user's favorite properties
    if user:
        for property in properties:
            if user in property.favorited.all():
                favorites.append(property.id)
    #
    #

    serializer = PropertiesListSerializer(properties, many=True)

    return JsonResponse({
        'data': serializer.data,
        'favorites': favorites
    })
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    """
    Retrieve the details of a specific property.

    Args:
        request (HttpRequest): The HTTP request object.
        pk (int): The primary key of the property to retrieve.

    Returns:
        JsonResponse: A JSON response containing the property details.
    """
    property = Property.objects.get(pk=pk)
    serializer = PropertiesDetailSerializer(property, many=False)
    return JsonResponse(serializer.data)
    
@api_view(['POST', 'FILES'])
def create_property(request):
    
    """
    Create a new property listing.

    This endpoint accepts property details from a form and saves the
    property to the database with the current user as the landlord.

    Args:
        request (HttpRequest): The HTTP request object containing form data.

    Returns:
        JsonResponse: A JSON response indicating success or failure.
    """
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        return JsonResponse({'success': True})
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'errors': form.errors.as_json()}, status=400)


@api_view(['POST'])
def book_property(request, pk):
    """
    Book a property for a specified date range.

    This endpoint creates a reservation for the specified property
    and records the booking details.

    Args:
        request (HttpRequest): The HTTP request object containing booking details.
        pk (int): The primary key of the property to book.

    Returns:
        JsonResponse: A JSON response indicating success or failure of the booking.
    """
    
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')
        property = Property.objects.get(pk=pk)
        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )
        return JsonResponse({'success': True})
    except Exception as e:
        print('Error', e)
        return JsonResponse({'success': False})

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservations(request, pk):
    """
    Retrieve reservations for a specific property.

    Args:
        request (HttpRequest): The HTTP request object.
        pk (int): The primary key of the property.

    Returns:
        JsonResponse: A JSON response containing the list of reservations for the property.
    """
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()

    serializer = ReservationsListSerializer(reservations, many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def toggle_favorite(request, pk):
    property = Property.objects.get(pk=pk)

    if request.user in property.favorited.all():
        property.favorited.remove(request.user)

        return JsonResponse({'is_favorite': False})
    else:
        property.favorited.add(request.user)

        return JsonResponse({'is_favorite': True})

