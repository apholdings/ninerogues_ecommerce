from rest_framework import serializers
from .models import FixedPriceCoupon, PercentageCoupon


class FixedPriceCouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = FixedPriceCoupon
        fields = ('name', 'discount_price', )


class PercentageCouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = PercentageCoupon
        fields = ('name', 'discount_percentage', )
