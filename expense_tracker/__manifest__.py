{
    'name': 'Personal Expense Tracker',
    'version': '1.0',
    'summary': 'Track personal expenses',
    'category': 'Tools',
    'author': '',
    'depends': ['base', 'web'],
    'data': [
    ],
    'demo': [
    ],
    'assets': {
        'web.assets_backend': [
'expense_tracker/static/src/expense_tracker.js',
'expense_tracker/static/src/expense_tracker.xml',
'expense_tracker/static/src/components/**/*.js',
'expense_tracker/static/src/gallery_controller.js',
# 'expense_tracker/static/src/gallery_rendered.xml',
# 'expense_tracker/static/src/gallery_renderer.js',
'expense_tracker/static/src/gallery_view.js',
'expense_tracker/static/src/gallery_controller.xml',
# 'expense_tracker/static/src/views.xml',
            # 'expense_tracker/static/src/gallery_renderer.js',
            # 'expense_tracker/static/src/**/*',
            'expense_tracker/static/src/main.js',
        ],
'web.assets_qweb': [
            'expense_tracker/static/src/views.xml',
        ],
    },
    'installable': True,
    'application': True,
}
