window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/edusol.tech\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.3"
    }
};
/*! This file is auto-generated */
!function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d");
    function s(e, t) {
        var a = String.fromCharCode
          , e = (p.clearRect(0, 0, i.width, i.height),
        p.fillText(a.apply(this, e), 0, 0),
        i.toDataURL());
        return p.clearRect(0, 0, i.width, i.height),
        p.fillText(a.apply(this, t), 0, 0),
        e === i.toDataURL()
    }
    function c(e) {
        var t = a.createElement("script");
        t.src = e,
        t.defer = t.type = "text/javascript",
        a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"),
    t.supports = {
        everything: !0,
        everythingExceptFlag: !0
    },
    r = 0; r < o.length; r++)
        t.supports[o[r]] = function(e) {
            if (!p || !p.fillText)
                return !1;
            switch (p.textBaseline = "top",
            p.font = "600 32px Arial",
            e) {
            case "flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case "emoji":
                return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999])
            }
            return !1
        }(o[r]),
        t.supports.everything = t.supports.everything && t.supports[o[r]],
        "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag,
    t.DOMReady = !1,
    t.readyCallback = function() {
        t.DOMReady = !0
    }
    ,
    t.supports.everything || (n = function() {
        t.readyCallback()
    }
    ,
    a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1),
    e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n),
    a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })),
    (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji),
    c(e.wpemoji)))
}(window, document, window._wpemojiSettings);

// tt
function setREVStartSize(e) {
    //window.requestAnimationFrame(function() {
    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth, newh;
        pw = pw === 0 || isNaN(pw) || (e.l == "fullwidth" || e.layout == "fullwidth") ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.RSIH);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl)
                if (e.gw[i] === undefined || e.gw[i] === 0)
                    e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl)
                if (e.gh[i] === undefined || e.gh[i] === 0)
                    e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length), ix = 0, sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl)
                nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl)
                if (sl > nl[i] && nl[i] > 0) {
                    sl = nl[i];
                    ix = i;
                }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
            newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }
        var el = document.getElementById(e.c);
        if (el !== null && el)
            el.style.height = newh + "px";
        el = document.getElementById(e.c + "_wrapper");
        if (el !== null && el) {
            el.style.height = newh + "px";
            el.style.display = "block";
        }
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
    //});
}
;

window.RS_MODULES = window.RS_MODULES || {};
            window.RS_MODULES.modules = window.RS_MODULES.modules || {};
            window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
            window.RS_MODULES.defered = false;
            window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
            window.RS_MODULES.type = 'compiled';
 
            var wpcf7 = {
                "api": {
                    "root": "https:\/\/edusol.tech\/wp-json\/",
                    "namespace": "contact-form-7\/v1"
                },
                "cached": "1"
            };

            jQuery(function(jQuery) {
                jQuery.datepicker.setDefaults({
                    "closeText": "Close",
                    "currentText": "Today",
                    "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    "nextText": "Next",
                    "prevText": "Previous",
                    "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
                    "dateFormat": "MM d, yy",
                    "firstDay": 1,
                    "isRTL": false
                });
            });

            var tribe_l10n_datatables = {
                "aria": {
                    "sort_ascending": ": activate to sort column ascending",
                    "sort_descending": ": activate to sort column descending"
                },
                "length_menu": "Show _MENU_ entries",
                "empty_table": "No data available in table",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "info_empty": "Showing 0 to 0 of 0 entries",
                "info_filtered": "(filtered from _MAX_ total entries)",
                "zero_records": "No matching records found",
                "search": "Search:",
                "all_selected_text": "All items on this page were selected. ",
                "select_all_link": "Select all pages",
                "clear_selection": "Clear Selection.",
                "pagination": {
                    "all": "All",
                    "next": "Next",
                    "previous": "Previous"
                },
                "select": {
                    "rows": {
                        "0": "",
                        "_": ": Selected %d rows",
                        "1": ": Selected 1 row"
                    }
                },
                "datepicker": {
                    "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
                    "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    "monthNamesShort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    "monthNamesMin": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    "nextText": "Next",
                    "prevText": "Prev",
                    "currentText": "Today",
                    "closeText": "Done",
                    "today": "Today",
                    "clear": "Clear"
                }
            };
            (function() {
                var c = document.body.className;
                c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
                document.body.className = c;
            }
            )();

            var latepoint_helper = {
                "ajaxurl": "https:\/\/edusol.tech\/wp-admin\/admin-ajax.php",
                "time_pick_style": "timeline",
                "string_today": "Today",
                "calculate_price_route": "steps__calculate_price",
                "time_system": "12",
                "msg_not_available": "Not Available",
                "phone_format": "(999) 999-9999",
                "enable_phone_masking": "yes",
                "booking_button_route": "steps__start",
                "show_booking_end_time": "no",
                "customer_dashboard_url": "\/customer-dashboard",
                "demo_mode": "",
                "cancel_booking_prompt": "Are you sure you want to cancel this appointment?",
                "body_font_family": "-apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                "currency_symbol_before": "$",
                "currency_symbol_after": "",
                "is_timezone_selected": "",
                "start_from_booking_intent_route": "steps__start_from_booking_intent",
                "start_from_booking_intent_key": ""
            };

            var tinvwl_add_to_wishlist = {
                "text_create": "Create New",
                "text_already_in": "\"{product_name}\" already in Wishlist",
                "simple_flow": "1",
                "hide_zero_counter": "",
                "i18n_make_a_selection_text": "Please select some product options before adding this product to your wishlist.",
                "tinvwl_break_submit": "No items or actions are selected.",
                "tinvwl_clipboard": "Copied!",
                "allow_parent_variable": "",
                "block_ajax_wishlists_data": "",
                "update_wishlists_data": "",
                "hash_key": "ti_wishlist_data_ae8afd9cddad4b170630a2345f0d10ac",
                "nonce": "9a216fdb6b",
                "rest_root": "https:\/\/edusol.tech\/wp-json\/",
                "plugin_url": "https:\/\/edusol.tech\/wp-content\/plugins\/ti-woocommerce-wishlist\/"
            };


            var TRX_ADDONS_STORAGE = {
                "ajax_url": "https:\/\/edusol.tech\/wp-admin\/admin-ajax.php",
                "ajax_nonce": "f5bc9b4ac8",
                "site_url": "https:\/\/edusol.tech",
                "post_id": "5002",
                "vc_edit_mode": "",
                "is_preview": "",
                "is_preview_gb": "",
                "is_preview_elm": "",
                "popup_engine": "magnific",
                "scroll_progress": "hide",
                "hide_fixed_rows": "1",
                "smooth_scroll": "",
                "animate_inner_links": "1",
                "disable_animation_on_mobile": "",
                "add_target_blank": "0",
                "menu_collapse": "1",
                "menu_collapse_icon": "trx_addons_icon-ellipsis-vert",
                "menu_stretch": "1",
                "resize_tag_video": "",
                "resize_tag_iframe": "1",
                "user_logged_in": "",
                "theme_slug": "qwery",
                "theme_bg_color": "#ffffff",
                "theme_accent_color": "#FF5B4A",
                "page_wrap_class": ".page_wrap",
                "email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-zA-Z0-9_\\-]+(\\.[a-zA-Z0-9_\\-]+)*\\.[a-zA-Z0-9]{2,6}$",
                "mobile_breakpoint_fixedrows_off": "768",
                "mobile_breakpoint_fixedcolumns_off": "768",
                "mobile_breakpoint_stacksections_off": "768",
                "mobile_breakpoint_fullheight_off": "1025",
                "mobile_breakpoint_mousehelper_off": "1025",
                "msg_caption_yes": "Yes",
                "msg_caption_no": "No",
                "msg_caption_ok": "OK",
                "msg_caption_apply": "Apply",
                "msg_caption_cancel": "Cancel",
                "msg_caption_attention": "Attention!",
                "msg_caption_warning": "Warning!",
                "msg_ajax_error": "Invalid server answer!",
                "msg_magnific_loading": "Loading image",
                "msg_magnific_error": "Error loading image",
                "msg_magnific_close": "Close (Esc)",
                "msg_error_like": "Error saving your like! Please, try again later.",
                "msg_field_name_empty": "The name can't be empty",
                "msg_field_email_empty": "Too short (or empty) email address",
                "msg_field_email_not_valid": "Invalid email address",
                "msg_field_text_empty": "The message text can't be empty",
                "msg_search_error": "Search error! Try again later.",
                "msg_send_complete": "Send message complete!",
                "msg_send_error": "Transmit failed!",
                "msg_validation_error": "Error data validation!",
                "msg_name_empty": "The name can't be empty",
                "msg_name_long": "Too long name",
                "msg_email_empty": "Too short (or empty) email address",
                "msg_email_long": "E-mail address is too long",
                "msg_email_not_valid": "E-mail address is invalid",
                "msg_text_empty": "The message text can't be empty",
                "msg_copied": "Copied!",
                "ajax_views": "",
                "menu_cache": [".menu_mobile_inner nav > ul"],
                "login_via_ajax": "1",
                "double_opt_in_registration": "1",
                "msg_login_empty": "The Login field can't be empty",
                "msg_login_long": "The Login field is too long",
                "msg_password_empty": "The password can't be empty and shorter then 4 characters",
                "msg_password_long": "The password is too long",
                "msg_login_success": "Login success! The page should be reloaded in 3 sec.",
                "msg_login_error": "Login failed!",
                "msg_not_agree": "Please, read and check 'Terms and Conditions'",
                "msg_password_not_equal": "The passwords in both fields are not equal",
                "msg_registration_success": "Thank you for registering. Please confirm registration by clicking on the link in the letter sent to the specified email.",
                "msg_registration_error": "Registration failed!",
                "shapes_url": "https:\/\/edusol.tech\/wp-content\/themes\/qwery\/skins\/default\/trx_addons\/css\/shapes\/",
                "elementor_stretched_section_container": ".page_wrap",
                "pagebuilder_preview_mode": "",
                "elementor_animate_items": ".elementor-heading-title,.sc_item_subtitle,.sc_item_title,.sc_item_descr,.sc_item_posts_container + .sc_item_button,.sc_item_button.sc_title_button,nav > ul > li",
                "msg_change_layout": "After changing the layout, the page will be reloaded! Continue?",
                "msg_change_layout_caption": "Change layout",
                "add_to_links_url": [{
                    "mask": "elementor.com\/",
                    "link": "https:\/\/trk.elementor.com\/2496"
                }],
                "msg_no_products_found": "No products found! Please, change query parameters and try again.",
                "audio_effects_allowed": "0",
                "mouse_helper": "1",
                "mouse_helper_delay": "8",
                "mouse_helper_centered": "0",
                "msg_mouse_helper_anchor": "Scroll to",
                "portfolio_use_gallery": "",
                "scroll_to_anchor": "0",
                "update_location_from_anchor": "0",
                "msg_sc_googlemap_not_avail": "Googlemap service is not available",
                "msg_sc_googlemap_geocoder_error": "Error while geocode address",
                "sc_icons_animation_speed": "50",
                "msg_sc_osmap_not_avail": "OpenStreetMap service is not available",
                "msg_sc_osmap_geocoder_error": "Error while geocoding address",
                "osmap_tiler": "vector",
                "osmap_tiler_styles": [],
                "osmap_attribution": "Map data \u00a9 <a href=\"https:\/\/www.openstreetmap.org\/\">OpenStreetMap<\/a> contributors",
                "msg_sc_yandexmap_not_avail": "Yandex map service is not available",
                "msg_sc_yandexmap_geocoder_error": "Error while geocode address",
                "slider_round_lengths": "1"
            };

            var wpgdprcFront = {
                "ajaxUrl": "https:\/\/edusol.tech\/wp-admin\/admin-ajax.php",
                "ajaxNonce": "0fcb36e392",
                "ajaxArg": "security",
                "pluginPrefix": "wpgdprc",
                "blogId": "1",
                "isMultiSite": "",
                "locale": "en_US",
                "showSignUpModal": "",
                "showFormModal": "",
                "cookieName": "wpgdprc-consent",
                "consentVersion": "",
                "path": "\/",
                "prefix": "wpgdprc"
            };
            

            var QWERY_STORAGE = {
                "ajax_url": "https:\/\/edusol.tech\/wp-admin\/admin-ajax.php",
                "ajax_nonce": "f5bc9b4ac8",
                "site_url": "https:\/\/edusol.tech",
                "theme_url": "https:\/\/edusol.tech\/wp-content\/themes\/qwery\/",
                "site_scheme": "scheme_light",
                "user_logged_in": "",
                "mobile_layout_width": "768",
                "mobile_device": "1",
                "mobile_breakpoint_underpanels_off": "768",
                "mobile_breakpoint_fullheight_off": "1025",
                "menu_side_stretch": "",
                "menu_side_icons": "1",
                "background_video": "",
                "use_mediaelements": "1",
                "resize_tag_video": "",
                "resize_tag_iframe": "1",
                "open_full_post": "",
                "which_block_load": "article",
                "admin_mode": "",
                "msg_ajax_error": "Invalid server answer!",
                "msg_i_agree_error": "Please accept the terms of our Privacy Policy.",
                "toggle_title": "Filter by ",
                "msg_copied": "Copied!",
                "alter_link_color": "#FF5B4A",
                "mc4wp_msg_email_min": "Email address is too short (or empty)",
                "mc4wp_msg_email_max": "Too long email address",
                "button_hover": "default"
            };

            var mejsL10n = {
                "language": "en",
                "strings": {
                    "mejs.download-file": "Download File",
                    "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/",
                    "mejs.fullscreen": "Fullscreen",
                    "mejs.play": "Play",
                    "mejs.pause": "Pause",
                    "mejs.time-slider": "Time Slider",
                    "mejs.time-help-text": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.",
                    "mejs.live-broadcast": "Live Broadcast",
                    "mejs.volume-help-text": "Use Up\/Down Arrow keys to increase or decrease volume.",
                    "mejs.unmute": "Unmute",
                    "mejs.mute": "Mute",
                    "mejs.volume-slider": "Volume Slider",
                    "mejs.video-player": "Video Player",
                    "mejs.audio-player": "Audio Player",
                    "mejs.captions-subtitles": "Captions\/Subtitles",
                    "mejs.captions-chapters": "Chapters",
                    "mejs.none": "None",
                    "mejs.afrikaans": "Afrikaans",
                    "mejs.albanian": "Albanian",
                    "mejs.arabic": "Arabic",
                    "mejs.belarusian": "Belarusian",
                    "mejs.bulgarian": "Bulgarian",
                    "mejs.catalan": "Catalan",
                    "mejs.chinese": "Chinese",
                    "mejs.chinese-simplified": "Chinese (Simplified)",
                    "mejs.chinese-traditional": "Chinese (Traditional)",
                    "mejs.croatian": "Croatian",
                    "mejs.czech": "Czech",
                    "mejs.danish": "Danish",
                    "mejs.dutch": "Dutch",
                    "mejs.english": "English",
                    "mejs.estonian": "Estonian",
                    "mejs.filipino": "Filipino",
                    "mejs.finnish": "Finnish",
                    "mejs.french": "French",
                    "mejs.galician": "Galician",
                    "mejs.german": "German",
                    "mejs.greek": "Greek",
                    "mejs.haitian-creole": "Haitian Creole",
                    "mejs.hebrew": "Hebrew",
                    "mejs.hindi": "Hindi",
                    "mejs.hungarian": "Hungarian",
                    "mejs.icelandic": "Icelandic",
                    "mejs.indonesian": "Indonesian",
                    "mejs.irish": "Irish",
                    "mejs.italian": "Italian",
                    "mejs.japanese": "Japanese",
                    "mejs.korean": "Korean",
                    "mejs.latvian": "Latvian",
                    "mejs.lithuanian": "Lithuanian",
                    "mejs.macedonian": "Macedonian",
                    "mejs.malay": "Malay",
                    "mejs.maltese": "Maltese",
                    "mejs.norwegian": "Norwegian",
                    "mejs.persian": "Persian",
                    "mejs.polish": "Polish",
                    "mejs.portuguese": "Portuguese",
                    "mejs.romanian": "Romanian",
                    "mejs.russian": "Russian",
                    "mejs.serbian": "Serbian",
                    "mejs.slovak": "Slovak",
                    "mejs.slovenian": "Slovenian",
                    "mejs.spanish": "Spanish",
                    "mejs.swahili": "Swahili",
                    "mejs.swedish": "Swedish",
                    "mejs.tagalog": "Tagalog",
                    "mejs.thai": "Thai",
                    "mejs.turkish": "Turkish",
                    "mejs.ukrainian": "Ukrainian",
                    "mejs.vietnamese": "Vietnamese",
                    "mejs.welsh": "Welsh",
                    "mejs.yiddish": "Yiddish"
                }
            };

            var _wpmejsSettings = {
                "pluginPath": "\/wp-includes\/js\/mediaelement\/",
                "classPrefix": "mejs-",
                "stretching": "responsive"
            };

            wp.i18n.setLocaleData({
                'text direction\u0004ltr': ['ltr']
            });


            var ElementorProFrontendConfig = {
                "ajaxurl": "https:\/\/edusol.tech\/wp-admin\/admin-ajax.php",
                "nonce": "46f2523592",
                "urls": {
                    "assets": "https:\/\/edusol.tech\/wp-content\/plugins\/elementor-pro\/assets\/",
                    "rest": "https:\/\/edusol.tech\/wp-json\/"
                },
                "shareButtonsNetworks": {
                    "facebook": {
                        "title": "Facebook",
                        "has_counter": true
                    },
                    "twitter": {
                        "title": "Twitter"
                    },
                    "linkedin": {
                        "title": "LinkedIn",
                        "has_counter": true
                    },
                    "pinterest": {
                        "title": "Pinterest",
                        "has_counter": true
                    },
                    "reddit": {
                        "title": "Reddit",
                        "has_counter": true
                    },
                    "vk": {
                        "title": "VK",
                        "has_counter": true
                    },
                    "odnoklassniki": {
                        "title": "OK",
                        "has_counter": true
                    },
                    "tumblr": {
                        "title": "Tumblr"
                    },
                    "digg": {
                        "title": "Digg"
                    },
                    "skype": {
                        "title": "Skype"
                    },
                    "stumbleupon": {
                        "title": "StumbleUpon",
                        "has_counter": true
                    },
                    "mix": {
                        "title": "Mix"
                    },
                    "telegram": {
                        "title": "Telegram"
                    },
                    "pocket": {
                        "title": "Pocket",
                        "has_counter": true
                    },
                    "xing": {
                        "title": "XING",
                        "has_counter": true
                    },
                    "whatsapp": {
                        "title": "WhatsApp"
                    },
                    "email": {
                        "title": "Email"
                    },
                    "print": {
                        "title": "Print"
                    }
                },
                "woocommerce": {
                    "menu_cart": {
                        "cart_page_url": "https:\/\/edusol.tech\/cart\/",
                        "checkout_page_url": "https:\/\/edusol.tech\/checkout\/"
                    }
                },
                "facebook_sdk": {
                    "lang": "en_US",
                    "app_id": ""
                },
                "lottie": {
                    "defaultAnimationUrl": "https:\/\/edusol.tech\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"
                }
            };

            var elementorFrontendConfig = {
                "environmentMode": {
                    "edit": false,
                    "wpPreview": false,
                    "isScriptDebug": false
                },
                "i18n": {
                    "shareOnFacebook": "Share on Facebook",
                    "shareOnTwitter": "Share on Twitter",
                    "pinIt": "Pin it",
                    "download": "Download",
                    "downloadImage": "Download image",
                    "fullscreen": "Fullscreen",
                    "zoom": "Zoom",
                    "share": "Share",
                    "playVideo": "Play Video",
                    "previous": "Previous",
                    "next": "Next",
                    "close": "Close"
                },
                "is_rtl": false,
                "breakpoints": {
                    "xs": 0,
                    "sm": 480,
                    "md": 768,
                    "lg": 1025,
                    "xl": 1440,
                    "xxl": 1600
                },
                "responsive": {
                    "breakpoints": {
                        "mobile": {
                            "label": "Mobile",
                            "value": 767,
                            "default_value": 767,
                            "direction": "max",
                            "is_enabled": true
                        },
                        "mobile_extra": {
                            "label": "Mobile Extra",
                            "value": 880,
                            "default_value": 880,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "tablet": {
                            "label": "Tablet",
                            "value": 1024,
                            "default_value": 1024,
                            "direction": "max",
                            "is_enabled": true
                        },
                        "tablet_extra": {
                            "label": "Tablet Extra",
                            "value": 1200,
                            "default_value": 1200,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "laptop": {
                            "label": "Laptop",
                            "value": 1366,
                            "default_value": 1366,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "widescreen": {
                            "label": "Widescreen",
                            "value": 2400,
                            "default_value": 2400,
                            "direction": "min",
                            "is_enabled": false
                        }
                    }
                },
                "version": "3.6.5",
                "is_static": false,
                "experimentalFeatures": {
                    "e_import_export": true,
                    "e_hidden_wordpress_widgets": true,
                    "theme_builder_v2": true,
                    "landing-pages": true,
                    "elements-color-picker": true,
                    "favorite-widgets": true,
                    "admin-top-bar": true,
                    "page-transitions": true,
                    "notes": true,
                    "form-submissions": true,
                    "e_scroll_snap": true
                },
                "urls": {
                    "assets": "https:\/\/edusol.tech\/wp-content\/plugins\/elementor\/assets\/"
                },
                "settings": {
                    "page": [],
                    "editorPreferences": []
                },
                "kit": {
                    "stretched_section_container": ".page_wrap",
                    "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                    "global_image_lightbox": "yes",
                    "lightbox_enable_counter": "yes",
                    "lightbox_enable_fullscreen": "yes",
                    "lightbox_enable_zoom": "yes",
                    "lightbox_enable_share": "yes",
                    "lightbox_title_src": "title",
                    "lightbox_description_src": "description",
                    "woocommerce_notices_elements": []
                },
                "post": {
                    "id": 5002,
                    "title": "Home%20%E2%80%93%20EduSol",
                    "excerpt": "",
                    "featuredImage": false
                }
            };

            (function(body) {
                'use strict';
                body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
            }
            )(document.body);



