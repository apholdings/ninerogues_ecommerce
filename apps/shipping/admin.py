from django.contrib import admin
from .models import Shipping


class ShippingAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', )
    list_display_links = ('name', )
    list_editable = ('price', )
    search_fields = ('name', )
    list_per_page = 25


admin.site.register(Shipping, ShippingAdmin)