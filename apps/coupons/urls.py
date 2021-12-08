from django.urls import path
from .views import CheckCouponView

urlpatterns = [
    path('check-coupon', CheckCouponView.as_view()),
]