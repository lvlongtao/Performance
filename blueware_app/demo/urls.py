from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
import xadmin
xadmin.autodiscover()

# from xadmin.plugins import xversion
# xversion.register_models()

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(xadmin.site.urls))
)
