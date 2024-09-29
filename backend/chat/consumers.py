import json
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import ConversationMessage

class ChatConsumer(AsyncWebsocketConsumer):
    """
    A WebSocket consumer for handling chat functionality.
    
    This consumer allows users to connect to a chat room, send messages,
    and receive messages in real-time.
    """
    async def connect(self):
        """
        Handles the connection of a WebSocket client.
        
        Retrieves the room name from the URL route, constructs the room group name,
        adds the channel to the group, and accepts the connection.
        """
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'
        # Join room
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        # Accept the WebSocket connection
        await self.accept()
    async def disconnect(self):
        """
        Handles the disconnection of a WebSocket client.
        
        Removes the channel from the room group upon disconnection.
        
        Args:
            close_code (int): The code indicating the reason for disconnection.
        """
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
    # Recieve message from web sockets
    async def receive(self, text_data):
        
        """
        Handles incoming messages from the WebSocket.
        
        Parses the incoming message, retrieves relevant data, sends it
        to the room group, and saves the message to the database.
        
        Args:
            text_data (str): The incoming message as a JSON string.
        """
        
        data = json.loads(text_data)
        conversation_id = data['data']['conversation_id']
        sent_to_id = data['data']['sent_to_id']
        name = data['data']['name']
        body = data['data']['body']
        
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'body': body,
                'name': name
            }
        )
        await self.save_message(conversation_id, body, sent_to_id)
    
    # Sending messages
    async def chat_message(self, event):
        
        """
        Handles the delivery of messages to the WebSocket client.
        
        Extracts the message body and name from the event and sends it
        back to the WebSocket client.
        
        Args:
            event (dict): The event containing the message data.
        """
        
        body = event['body']
        name = event['name']
        await self.send(text_data=json.dumps({
            'body': body,
            'name': name
        }))
    @sync_to_async
    def save_message(self, conversation_id, body, sent_to_id):
        """
        Saves a chat message to the database.
        
        Creates a new ConversationMessage object using the provided data.
        
        Args:
            conversation_id (int): The ID of the conversation the message belongs to.
            body (str): The content of the message.
            sent_to_id (int): The ID of the user the message is sent to.
        """
        user = self.scope['user']
        ConversationMessage.objects.create(conversation_id=conversation_id, body=body, sent_to_id=sent_to_id, created_by=user)