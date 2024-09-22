from rest_framework import viewsets
from .serializer import PropertySerializer
from .models import Property
class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    
