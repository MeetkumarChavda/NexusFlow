from rest_framework import serializers
from .models import Property
class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields=['id','title','description','price_per_night','bedrooms','bathrooms','guests','country','country_code','category','favorited','image','landlord','created_at']