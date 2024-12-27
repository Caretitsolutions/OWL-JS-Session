{
    'name': 'Personal Expense Tracker',
    'version': '1.0',
    'summary': 'Track personal expenses',
    'category': 'Tools',
    'author': '',
    'depends': ['base', 'web'],
    'data': [
        'views/view.xml',
    ],
    'demo': [
    ],
    'assets': {
        'web.assets_backend': [
            'gallery/static/src/gallery_controller.xml',
            # 'gallery/static/src/gallery_rendered.xml',
            # 'gallery/static/src/gallery_controller.xml',
            # 'gallery/static/src/gallery_image.xml',
            'gallery/static/src/gallery_controller.js',
            # 'gallery/static/src/gallery_image.js',
            # 'gallery/static/src/gallery_arch_parser.js',
            # 'gallery/static/src/gallery_renderer.js',
            # 'gallery/static/src/gallery_model.js',
            'gallery/static/src/gallery_view.js',
        ],
    },
    'installable': True,
    'application': True,
}
