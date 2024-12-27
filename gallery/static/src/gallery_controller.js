/** @odoo-module */
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart, onWillUpdateProps, useState } from "@odoo/owl";
import { standardViewProps } from "@web/views/standard_view_props";
import { GalleryModel } from "./gallery_model";
import { GalleryRenderer } from "./gallery_renderer";
import { usePager } from "@web/search/pager_hook";


export class GalleryController extends Component {
    static template = "gallery.GalleryController";
    static props = {
        ...standardViewProps,
//                archInfo: Object,

    };


    static components = { Layout };

//    setup() {
//        this.orm = useService("orm");
//        this.model = useState(
//            new GalleryModel(
//                this.orm,
//                this.props.resModel,
//                this.props.fields,
//                this.props.archInfo,
//            )
//        );
//        this.images = useState({ data: [] });
//         usePager(() => {
//            return {
//                offset: this.model.pager.offset,
//                limit: this.model.pager.limit,
//                total: this.model.recordsLength,
//                onUpdate: async ({ offset, limit }) => {
//                    this.model.pager.offset = offset;
//                    this.model.pager.limit = limit;
//                    await this.model.load(this.props.domain);
//                },
//            };
//         });
//        onWillStart(async () => {
////            const { records } = await this.loadImages(this.props.domain);
////            this.images.data = records;
//                        await this.model.load(this.props.domain);
//
//        });
//        onWillUpdateProps(async (nextProps) => {
//            if (JSON.stringify(nextProps.domain) !== JSON.stringify(this.props.domain)) {
////                const { records } = await this.loadImages(nextProps.domain);
////                this.images.data = records;
//                                await this.model.load(nextProps.domain);
//            }
//        });
//    }


}

