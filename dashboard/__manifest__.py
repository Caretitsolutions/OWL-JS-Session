# -*- coding: utf-8 -*-
{
    'name': "Dashboard",

    'summary': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'description': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'author': "",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials/AwesomeDashboard',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web'],

    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'dashboard/static/src/**/*',
            # 'expense_tracker/static/src/screens/expense_list/*',
            # 'expense_tracker/static/src/screens/expense_categories_list/expense_categories_list.js',
            # 'expense_tracker/static/src/screens/expense_categories_list/expense_categories_list.xml',
            #
            # 'expense_tracker_dashboard/static/src/**/*',
            # ('remove', 'expense_tracker_dashboard/static/src/dashboard/**/*'),
        ],
        # 'expense_tracker_dashboard.dashboard': [
            # 'expense_tracker_dashboard/static/src/dashboard/**/*'
        # ]
    },
    'license': 'AGPL-3'
}