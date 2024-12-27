/** @odoo-module */

export class GalleryModel {
    constructor(orm, resModel, fields, archInfo) {
        this.orm = orm;
        this.resModel = resModel;
        const { imageField, limit, tooltipField } = archInfo;
        this.imageField = imageField;
        this.limit = limit;
        this.fields = fields;
        this.tooltipField = tooltipField;
        this.pager = { offset: 0, limit: limit };
        this.records = [];

    }
    async load(domain) {
        const { records } = await
            this.orm.webSearchRead(this.resModel, domain, {
                limit: this.limit,
                specification: {
                    [this.imageField]: {},
                    ...( this.tooltipField ? {[this.tooltipField]: {}}: {}),
                },
                context: {
                    bin_size: true,
                }
            });
//        );

        this.records = records || [];
        this.recordsLength = records.length;
    }
}