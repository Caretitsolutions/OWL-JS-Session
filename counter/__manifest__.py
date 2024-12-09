{
    'name': 'Personal Expense Tracker',
    'version': '1.0',
    'summary': 'Track personal expenses',
    'category': 'Tools',
    'author': 'Mohammed Shekha',
    'depends': ['base', 'web'],
    'data': [
    ],
    'demo': [
    ],
    'assets': {
        'web.assets_backend': [
            'counter/static/src/**/*',
            'counter/static/src/main.js',
        ],
    },
    'installable': True,
    'application': True,
}