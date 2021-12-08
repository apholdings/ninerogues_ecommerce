from django.contrib import admin
from .models import FixedPriceCoupon, PercentageCoupon


class FixedPriceCouponAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'discount_price', )
    list_display_links = ('name', )
    list_editable = ('discount_price', )
    search_fields = ('name', )
    list_per_page = 25
admin.site.register(FixedPriceCoupon, FixedPriceCouponAdmin)


class PercentageCouponAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'discount_percentage', )
    list_display_links = ('name', )
    list_editable = ('discount_percentage', )
    search_fields = ('name', )
    list_per_page = 25
admin.site.register(PercentageCoupon, PercentageCouponAdmin)