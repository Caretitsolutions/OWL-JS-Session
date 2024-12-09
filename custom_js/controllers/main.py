from odoo import http

class MyController(http.Controller):
    @http.route('/my_custom_template', type='http', auth="public")
    def render_my_template(self, **kwargs):
        return http.request.render('your_module.my_counter_template', {
            'widget': your_widget_instance,  # Pass the widget to the template
        })