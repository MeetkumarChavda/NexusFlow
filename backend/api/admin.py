from django.contrib import admin
from .views import Property

# Register your models here.
class PropertyAdmin(admin.ModelAdmin):
    list_display=('id','title','description','price_per_night','bedrooms','bathrooms','guests','country','country_code','category','image','landlord','created_at')
admin.site.register(Property,PropertyAdmin)