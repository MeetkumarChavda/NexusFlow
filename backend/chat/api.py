from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Conversation, ConversationMessage
from .serializers import ConversationListSerializer, ConversationDetailSerializer, ConversationMessageSerializer
from useraccount.models import User

@api_view(['GET'])
def conversations_list(request):
    """
    Retrieves a list of all conversations for the current user.
    
    - Serializes all conversations associated with the current user.
    - Uses `ConversationListSerializer` to serialize the data.
    
    Args:
        request (HttpRequest): The HTTP request object, which contains information about the current user.
    
    Returns:
        JsonResponse: A JSON response containing the serialized conversation data for the current user.
    """
    serializer = ConversationListSerializer(request.user.conversations.all(), many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def conversations_detail(request, pk):
    """
    Retrieves details of a specific conversation along with its messages for the current user.
    
    - Fetches the conversation based on the primary key (pk) and current user.
    - Serializes the conversation and its associated messages using `ConversationDetailSerializer` and `ConversationMessageSerializer`.
    
    Args:
        request (HttpRequest): The HTTP request object, which contains information about the current user.
        pk (int): The primary key of the conversation to retrieve.
    
    Returns:
        JsonResponse: A JSON response containing serialized data of the conversation and its messages.
    """
    conversation = request.user.conversations.get(pk=pk)
    conversation_serializer = ConversationDetailSerializer(conversation, many=False)
    messages_serializer = ConversationMessageSerializer(conversation.messages.all(), many=True)
    return JsonResponse({
        'conversation': conversation_serializer.data,
        'messages': messages_serializer.data
    }, safe=False)
    
@api_view(['GET'])
def conversations_start(request, user_id):
    """
    Starts or retrieves a conversation between the current user and another user.
    If no conversation exists, create a new conversation
    Get the user object for the specified user_id
    Create a new conversation
    Add the current user and the specified user to the conversation

    Args:
        request (HttpRequest): The HTTP request object, which contains information about the current user.
        user_id (int): The ID of the user to start or retrieve a conversation with.

    Returns:
        JsonResponse: A JSON response containing a success status and the conversation ID.
    """
    conversations = Conversation.objects.filter(users__in=[user_id]).filter(users__in=[request.user.id])
    if conversations.count() > 0:
        conversation = conversations.first()
        
        return JsonResponse({'success': True, 'conversation_id': conversation.id})
    else:
        user = User.objects.get(pk=user_id)
        conversation = Conversation.objects.create()
        conversation.users.add(request.user)
        conversation.users.add(user)
        return JsonResponse({'success': True, 'conversation_id': conversation.id})