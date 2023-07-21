
import { tabsAuschalter } from "./tabsAusschalter.js";

document.querySelector("#app").innerHTML = `
<script>
(function() {
    var request, b = document.body, c = 'className', cs = 'customize-support', rcs = new RegExp('(^|\\s+)(no-)?'+cs+'(\\s+|$)');

        request = true;

    b[c] = b[c].replace( rcs, ' ' );
    // The customizer requires postMessage and CORS (if the site is cross domain).
    b[c] += ( window.postMessage && request ? ' ' : ' no-' ) + cs;
}());
</script>
    <div id="wpadminbar" class="nojq mobile">
                <div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Werkzeugleiste">
        <ul id="wp-admin-bar-root-default" class="ab-top-menu"><li id="wp-admin-bar-wp-logo" class="menupop"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/about.php"><span class="ab-icon" aria-hidden="true"></span><span class="screen-reader-text">Über WordPress</span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-wp-logo-default" class="ab-submenu"><li id="wp-admin-bar-about"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/about.php">Über WordPress</a></li></ul><ul id="wp-admin-bar-wp-logo-external" class="ab-sub-secondary ab-submenu"><li id="wp-admin-bar-wporg"><a class="ab-item" href="https://de.wordpress.org/">WordPress.org</a></li><li id="wp-admin-bar-documentation"><a class="ab-item" href="https://wordpress.org/documentation/">Dokumentation</a></li><li id="wp-admin-bar-support-forums"><a class="ab-item" href="https://de.wordpress.org/support/forums/">Support</a></li><li id="wp-admin-bar-feedback"><a class="ab-item" href="https://wordpress.org/support/forum/requests-and-feedback">Feedback</a></li></ul></div></li><li id="wp-admin-bar-site-name" class="menupop"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/">Kompetenz für Menschen</a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-site-name-default" class="ab-submenu"><li id="wp-admin-bar-dashboard"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/">Dashboard</a></li></ul><ul id="wp-admin-bar-appearance" class="ab-submenu"><li id="wp-admin-bar-themes"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/themes.php">Themes</a></li><li id="wp-admin-bar-menus"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/nav-menus.php">Menüs</a></li></ul></div></li><li id="wp-admin-bar-customize" class="hide-if-no-customize"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/customize.php?url=https%3A%2F%2Fdev-typografix.de%2Fkom-bs%2Fwordpress%2Fcopy-js%2F%3Fpreview_id%3D4603%26preview_nonce%3D43e3b06d52%26preview%3Dtrue">Customizer</a></li><li id="wp-admin-bar-comments"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/edit-comments.php"><span class="ab-icon" aria-hidden="true"></span><span class="ab-label awaiting-mod pending-count count-0" aria-hidden="true">0</span><span class="screen-reader-text comments-in-moderation-text">0 Kommentare in Moderation</span></a></li><li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php"><span class="ab-icon" aria-hidden="true"></span><span class="ab-label">Neu</span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-bar-new-post"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php">Beitrag</a></li><li id="wp-admin-bar-new-media"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/media-new.php">Medien</a></li><li id="wp-admin-bar-new-page"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php?post_type=page">Seite</a></li><li id="wp-admin-bar-new-e-landing-page"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/edit.php?action=elementor_new_post&amp;post_type=e-landing-page&amp;template_type=landing-page&amp;_wpnonce=fe7b3c9fd9#library">Landingpage</a></li><li id="wp-admin-bar-new-elementor_library"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php?post_type=elementor_library">Template</a></li><li id="wp-admin-bar-new-jobs"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php?post_type=jobs">Stelleninserat</a></li><li id="wp-admin-bar-new-job-entry"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post-new.php?post_type=job-entry">Bewerbung</a></li><li id="wp-admin-bar-new-user"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/user-new.php">Benutzer</a></li></ul></div></li><li id="wp-admin-bar-edit" class="menupop"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=4603&amp;action=edit">Seite bearbeiten</a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-edit-default" class="ab-submenu"><li id="wp-admin-bar-duplicate_this"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/admin.php?action=dt_duplicate_post_as_draft&amp;post=4603&amp;nonce=e5d48d6e07">Dies duplizieren als draft</a></li></ul></div></li><li id="wp-admin-bar-elementor_edit_page" class="menupop"><a aria-haspopup="true" class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=4603&amp;action=elementor"><span class="elementor-edit-link-title">Mit Elementor bearbeiten</span></a><div class="ab-sub-wrapper"><ul class="ab-submenu" id="wp-admin-bar-elementor_edit_page-default"><li id="wp-admin-bar-elementor_edit_doc_50" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=50&amp;action=elementor"><span class="elementor-edit-link-title">Elementor Fußzeile #50</span><span class="elementor-edit-link-type">Fußzeile</span></a></li><li id="wp-admin-bar-elementor_edit_doc_990" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=990&amp;action=elementor"><span class="elementor-edit-link-title">Header Unterseiten</span><span class="elementor-edit-link-type">Kopfzeile</span></a></li><li id="wp-admin-bar-elementor_edit_doc_1073" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=1073&amp;action=elementor"><span class="elementor-edit-link-title">Angebotstab</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_edit_doc_3203" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=3203&amp;action=elementor"><span class="elementor-edit-link-title">Amb</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_edit_doc_3213" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=3213&amp;action=elementor"><span class="elementor-edit-link-title">jukos</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_edit_doc_3233" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=3233&amp;action=elementor"><span class="elementor-edit-link-title">erziehungsstellen</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_edit_doc_3249" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=3249&amp;action=elementor"><span class="elementor-edit-link-title">familiengruppen</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_edit_doc_3255" class="elementor-general-section"><a class="ab-item  " href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=3255&amp;action=elementor"><span class="elementor-edit-link-title">familienanalog</span><span class="elementor-edit-link-type">Loop Item</span></a></li><li id="wp-admin-bar-elementor_site_settings" class="elementor-second-section"><a class="ab-item  elementor-site-settings" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/post.php?post=4603&amp;action=elementor#e:run:panel/global/open"><span class="elementor-edit-link-title">Website-Einstellungen</span><span class="elementor-edit-link-type">Website</span></a></li><li id="wp-admin-bar-elementor_app_site_editor" class="elementor-second-section"><a class="ab-item  elementor-app-link" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/admin.php?page=elementor-app&amp;ver=3.14.1#/site-editor"><span class="elementor-edit-link-title">Theme Builder</span><span class="elementor-edit-link-type">Website</span></a></li></ul></div></li><li id="wp-admin-bar-rcb-top-node" class="menupop"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/admin.php?page=real-cookie-banner-component"><span class="custom-icon" style="float:left;width:22px !important;height:22px !important;margin: 5px 5px 0 !important;background-image:url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwLjQ2IDE5NC44NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOWVhM2E4Ij48cGF0aCBkPSJtMTg0LjYxIDc1LjQyYTIxLjQ4IDIxLjQ4IDAgMCAxIC0zMi40OS05Ljg0IDI1IDI1IDAgMCAxIC00LjI3LjM4IDI0LjMxIDI0LjMxIDAgMCAxIC0yMC45NS0xMS45NmgtLjFsLS4zNS4xNWMtLjI3LjEtLjUzLjItLjgyLjI5bC0uMzUuMTFjLS40MS4xMS0uOC4yLTEuMTkuMjdsLTYuMjggMS4xOGExMi4xMiAxMi4xMiAwIDAgMSAtNC43Ni0uMTIgMTAuOTMgMTAuOTMgMCAwIDEgLTguNTEtOSAxMS4zOCAxMS4zOCAwIDAgMSAtLjA4LTEuMzF2LTcuNjVhMTAuNTIgMTAuNTIgMCAwIDEgLjA5LTEuMzRjMC0uMTIgMC0uMjIgMC0uMzIuMDYtLjM3LjE0LS43Mi4yMy0xLjA2bC4wNy0uMjVhMTEuNjYgMTEuNjYgMCAwIDEgLjQ3LTEuMjRsLjExLS4yM2ExMC40NiAxMC40NiAwIDAgMSAuNTQtMSAxLjE3IDEuMTcgMCAwIDEgLjA4LS4xMyAxMC44OSAxMC44OSAwIDAgMSAxLjcxLTIuMDVsLjA4LS4wN2ExMS41NCAxMS41NCAwIDAgMSA2LjM5LTIuOWw0LjYxLS41N2ExMi4yNSAxMi4yNSAwIDAgMSAxLjQ4LS4wOSAxMS44OCAxMS44OCAwIDAgMSA0LjA3LjcxIDIxLjIyIDIxLjIyIDAgMCAxIC01LjExLTEzLjgzIDIwLjg0IDIwLjg0IDAgMCAxIC4yNS0zLjI4IDkzLjk0IDkzLjk0IDAgMSAwIDY1LjA1IDY1LjE0em0tNzUuMzktNTAuNjhhMS4yNyAxLjI3IDAgMSAxIC0xLjIyIDEuMjYgMS4yNiAxLjI2IDAgMCAxIDEuMjItMS4yNnptLTU2IDIwLjMzLjczLS40MmEzLjM4IDMuMzggMCAwIDEgNC42MiAxLjI0bDUuNDMgOS40MmEzLjM5IDMuMzkgMCAwIDEgLTEuMjQgNC42MmwtLjczLjQxYTMuMzggMy4zOCAwIDAgMSAtNC42Mi0xLjIzbC01LjQzLTkuNDJhMy4zOCAzLjM4IDAgMCAxIDEuMTktNC42MnptLTMzLjY0IDM0LjIxYTguMzggOC4zOCAwIDAgMSAtMS4zNy0uODcgOC44OSA4Ljg5IDAgMCAxIC0xLjEzLTEuMDggNy4xIDcuMSAwIDAgMSAtMS40My0yLjY0IDYuMjUgNi4yNSAwIDAgMSAtLjE3LS43MiA2LjEgNi4xIDAgMCAxIC0uMDYtMS40OCA1Ljg3IDUuODcgMCAwIDEgLjMyLTEuNDlsMy4zNi05LjVjLjA2LS4xNy4xMy0uMzQuMi0uNWwuMDctLjE0Yy4wNi0uMTMuMTMtLjI1LjItLjM3bC4wNy0uMTIuMjktLjQyYTEuNDcgMS40NyAwIDAgMSAuMS0uMTMgMy4yMyAzLjIzIDAgMCAxIC4yMy0uMjdsLjE1LS4xNy4yMy0uMjIuMjktLjI2LjIxLS4xNmExLjQ0IDEuNDQgMCAwIDEgLjI1LS4xOGwuMTUtLjFhNi4wOSA2LjA5IDAgMCAxIDEtLjU2aC4wNWE3LjQ2IDcuNDYgMCAwIDEgMS43MS0uNDggOC4wOCA4LjA4IDAgMCAxIDMgLjFsNiAxLjMzYzMuODMuODUgNi41MSA0LjIxIDYuMTIgNy42N2wtMS4wNiA5LjU5YTUuODkgNS44OSAwIDAgMSAtMi4zNiA0LjA4bC0uMDkuMDZhNS4wNyA1LjA3IDAgMCAxIC0uNTQuMzZsLS4xLjA2LS4zMS4xNi0uMjEuMS0uNDMuMTgtLjI5LjEtLjI1LjA4LS41LjEzaC0uMjFsLS41NS4wOGgtLjEyLS41NS0uMTVjLS4yMSAwLS40MiAwLS42MyAwaC0uMTRsLS42OC0uMDgtOC4yNS0xLjM1YTguMjIgOC4yMiAwIDAgMSAtMi40Mi0uNzl6bTYuMDggMjkuMDdhMS43OSAxLjc5IDAgMSAxIC0xLjc4IDEuNzkgMS43OSAxLjc5IDAgMCAxIDEuNzgtMS43OXptMTAuOTEgNDcuODlhMi4xIDIuMSAwIDEgMSAyLjEtMi4xIDIuMTEgMi4xMSAwIDAgMSAtMi4xIDIuMXptMi4yNy0zMS4xNC05LjQyIDUuNDRhMy4zOCAzLjM4IDAgMCAxIC00LjYyLTEuMjRsLS40Mi0uNzNhMy4zOSAzLjM5IDAgMCAxIDEuMjQtNC41N2w5LjM4LTUuNDhhMy4zOCAzLjM4IDAgMCAxIDQuNjIgMS4yM2wuNDIuNzNhMy4zOCAzLjM4IDAgMCAxIC0xLjIgNC42MnptMy44NS04MS41OWEyLjEgMi4xIDAgMSAxIDIuMS0yLjEgMi4xIDIuMSAwIDAgMSAtMi4xIDIuMXptMi42MSA0Ny44Mi0uMDYtLjA4YTIuNzUgMi43NSAwIDAgMSAtLjE3LS4yOSAyLjM5IDIuMzkgMCAwIDEgLS4xNS0uMzdzMCAwIDAtLjA2YTMuNTcgMy41NyAwIDAgMSAtLjEtLjM1IDMuNTMgMy41MyAwIDAgMSAtLjA2LS44NiA0IDQgMCAwIDEgLjE3LS44OSA0LjA2IDQuMDYgMCAwIDEgLjY4LTEuNDNsMi0yLjRhMy43NSAzLjc1IDAgMCAxIDQuODUtMWw0LjA4IDIuNjRhMyAzIDAgMCAxIDEuMzIgMnYuMzhhMy44MiAzLjgyIDAgMCAxIC0uMDYuODJsLS4wOS4zNXYuMTFsLS4xMS4yN2EuNS41IDAgMCAxIDAgLjEzbC0uMTMuMjYtLjA2LjEyYy0uMDguMTItLjE1LjI0LS4yNC4zNmwtMi41IDMuNDJhNC4xOSA0LjE5IDAgMCAxIC0xLjY3IDEuMzlsLS4zNy4xNmEzLjYxIDMuNjEgMCAwIDEgLTEuODkuMTYgMi4zNyAyLjM3IDAgMCAxIC0uMzYtLjA5IDIuOTIgMi45MiAwIDAgMSAtMS4yOC0uNzhsLTMuNTQtMy42NmEzLjc2IDMuNzYgMCAwIDEgLS4yNi0uMzF6bTIyLjQ0IDY2YTUuODQgNS44NCAwIDAgMSAtLjIuNTkgNS41MiA1LjUyIDAgMCAxIC0uMjYuNTUgNS4xMSA1LjExIDAgMCAxIC0uNzUgMS4wNiA1LjI5IDUuMjkgMCAwIDEgLS40MS40MWwtLjEzLjExYy0uMTIuMS0uMjQuMi0uMzcuMjlsLS4xOC4xM2MtLjEzLjA4LS4yNi4xNy0uNC4yNGwtLjE4LjExYy0uMi4xLS40LjItLjYyLjI5bC02LjI0IDIuNTRhNi42NSA2LjY1IDAgMCAxIC0yLjYzLjUxIDUuNDcgNS40NyAwIDAgMSAtNS40Ni00bC0xLjc0LTcuOTJjMC0uMTQtLjA1LS4yOS0uMDctLjQzYS41Ny41NyAwIDAgMSAwLS4xM2MwLS4xMSAwLS4yMiAwLS4zM3MwLS4wNyAwLS4xMSAwLS4yOCAwLS40MWEuNjguNjggMCAwIDEgMC0uMTQgMi43IDIuNyAwIDAgMSAwLS4yOHYtLjE3bC4wNi0uMjYuMDktLjI5YzAtLjA3IDAtLjE0LjA3LS4yYTEuNiAxLjYgMCAwIDEgLjEtLjIzbC4wNi0uMTRhNS41IDUuNSAwIDAgMSAuNDctLjgxIDUuOTIgNS45MiAwIDAgMSAxLTEuMDUgNi42IDYuNiAwIDAgMSAyLjEtMS4yMWw0LjY0LTEuNjJjMy0xIDYuMjMuMTIgNy40MyAyLjY1bDMuMzMgN2E0Ljc0IDQuNzQgMCAwIDEgLjI5IDMuMjN6bTQuMjYtMTkuMTVhMi4xIDIuMSAwIDEgMSAyLjEtMi4xIDIuMSAyLjEgMCAwIDEgLTIuMSAyLjF6bTQuNjQtMjVhNC42NCA0LjY0IDAgMSAxIDQuNjQtNC42NCA0LjY0IDQuNjQgMCAwIDEgLTQuNjcgNC42NnptNS4zNi03NS4zNC0uNDQtLjcxYTMuMzcgMy4zNyAwIDAgMSAxLjA2LTQuNjZsOS4yLTUuOGEzLjM4IDMuMzggMCAwIDEgNC42NiAxLjA2bC40NS43MWEzLjM4IDMuMzggMCAwIDEgLTEuMDYgNC42NmwtOS4yIDUuOGEzLjM5IDMuMzkgMCAwIDEgLTQuNjctMS4wNnptMTQuMjYgMTkuNDZhMi4xIDIuMSAwIDEgMSAtMi4xLTIuMSAyLjEgMi4xIDAgMCAxIDIuMSAyLjF6bTYuNyA2Ni4wOWMtMSAzLjMzLTQuNTMgNS44MS04LjggNS44MXMtNy44NC0yLjQ4LTguNzktNS44MWExLjQgMS40IDAgMCAxIDEuMzQtMS43OGgxNC45YTEuNCAxLjQgMCAwIDEgMS4zOSAxLjc4em0xMy4yOCA0NC42MS0uNzIuNDJhMy4zNyAzLjM3IDAgMCAxIC00LjYyLTEuMjRsLTUuNDQtOS40MWEzLjM4IDMuMzggMCAwIDEgMS4yNC00LjYybC43Mi0uNDJhMy4zNyAzLjM3IDAgMCAxIDQuNjIgMS4yNGw1LjQ0IDkuNDFhMy4zNyAzLjM3IDAgMCAxIC0xLjI0IDQuNjJ6bS05LjQxLTU5LjQxYTQuNjQgNC42NCAwIDEgMSA0LjY0IDQuNjQgNC42NCA0LjY0IDAgMCAxIC00LjY0LTQuNjd6bTExLjQ1LTI0Ljg3LTE0LjkxIDMuMDhhMy44IDMuOCAwIDEgMSAtMS41NC03LjQ0bDE0LjkxLTMuMDlhMy44IDMuOCAwIDEgMSAxLjU0IDcuNDV6bTguOTEgNjUuODlhMi4xMSAyLjExIDAgMSAxIDIuMS0yLjEgMi4xIDIuMSAwIDAgMSAtMi4xIDIuMDd6bTQxLjEtNDMuNzlhMi4xMSAyLjExIDAgMSAxIC0yLjEtMi4xIDIuMSAyLjEgMCAwIDEgMi4xIDIuMDd6bS0yMC44MS0xMC4xNmE0Ljg1IDQuODUgMCAwIDEgLjIzLTEuMTcgNS40MSA1LjQxIDAgMCAxIC45NS0xLjc2bDIuNTctMy4xNWE0LjkzIDQuOTMgMCAwIDEgNi4zOC0xLjM2bDUuMzkgMy40NmEzLjkxIDMuOTEgMCAwIDEgMS43MyAyLjY1IDQgNCAwIDAgMSAuMDYuNSA1LjY1IDUuNjUgMCAwIDEgLS4wNyAxLjA4IDMuOSAzLjkgMCAwIDEgLS4xMi40NnMwIC4wOSAwIC4xNC0uMDkuMjQtLjE0LjM3bC0uMDcuMTZjLS4wNS4xMi0uMTEuMjMtLjE3LjM1bC0uMDguMTVjLS4xLjE2LS4yLjMyLS4zMS40OGwtMy4yOSA0LjQ5YTUuNDIgNS40MiAwIDAgMSAtMS4xOSAxLjIgNC42MSA0LjYxIDAgMCAxIC02LjA2LS4xN2wtNC42NS00LjgzYTMuMTkgMy4xOSAwIDAgMSAtLjMzLS40LjQ0LjQ0IDAgMCAxIC0uMDgtLjExIDMgMyAwIDAgMSAtLjIzLS4zOHYtLjA2Yy0uMDctLjE1LS4xNC0uMzEtLjItLjQ4YS4xOS4xOSAwIDAgMSAwLS4wOCA0IDQgMCAwIDEgLS4xMy0uNDYuNDMuNDMgMCAwIDAgMCAwIDQuNzQgNC43NCAwIDAgMSAtLjE5LTEuMDh6bTEyLjM5IDQ5LjQxdi4wNmMwIC4yMy0uMDcuNDctLjEyLjcxYTcuMTggNy4xOCAwIDAgMSAtLjUzIDEuNDd2LjA2Yy0uMTEuMi0uMjIuNC0uMzUuNTlsLS4xMi4xOGE0Ljg0IDQuODQgMCAwIDEgLS4zMy40NmMtLjA2LjA2LS4xMS4xMy0uMTYuMTlzLS4yNi4yOS0uMzkuNDJsLS4xNy4xOGMtLjIuMTgtLjQxLjM2LS42My41M2wtNi40IDQuOTRjLTMuNTcgMi43NS04LjYzIDItMTAuNDktMS41MWwtNC41My04LjZhMi44NiAyLjg2IDAgMCAxIC0uMjItLjQ3bC0uMDYtLjE0YzAtLjEzLS4wOS0uMjYtLjEzLS4zOHYtLjEzYzAtLjE2LS4wOC0uMzItLjExLS40OGExIDEgMCAwIDEgMC0uMTZjMC0uMTIgMC0uMjMtLjA1LS4zNHMwLS4xNCAwLS4yMSAwLS4yMSAwLS4zMiAwLS4yNCAwLS4zNyAwLS4xNyAwLS4yNSAwLS4yIDAtLjN2LS4xN2E2LjA1IDYuMDUgMCAwIDEgLjI5LTEuMDl2LS4wNWE3LjYxIDcuNjEgMCAwIDEgLjc4LTEuNTMgOCA4IDAgMCAxIDItMi4wN2w0Ljg1LTMuMjljMy4xMS0yLjE2IDcuMjQtMS44NiA5LjQ0LjY4bDYuMDggN2E1LjY1IDUuNjUgMCAwIDEgMS4zNSA0LjM5em0xMC0xNy4xNy04Ljc2LTYuNDVhMy4zOSAzLjM5IDAgMCAxIC0uNzItNC43M2wuNS0uNjdhMy4zNyAzLjM3IDAgMCAxIDQuNzMtLjcybDguNzUgNi40NWEzLjM3IDMuMzcgMCAwIDEgLjcyIDQuNzNsLS40OS42N2EzLjQgMy40IDAgMCAxIC00Ljc0LjcyeiIvPjxwYXRoIGQ9Im0xNjQuMTkgOS43MmE5My43OCA5My43OCAwIDAgMCAtMzAuNTgtOS43MiAyMS44MiAyMS44MiAwIDAgMCAuMiAyLjg5IDIxLjI4IDIxLjI4IDAgMCAwIDkuNTIgMTQuOTNjNy40MS0xLjI0IDE2LjMyLTIuMDIgMjAuODYtOC4xeiIvPjxwYXRoIGQ9Im0xNzAuMzEgMzkuMDhhNi4xOCA2LjE4IDAgMCAwIDMuNTEuNjVjLjc2LTMuODEuODktNy40Ny0uODgtMTAuNjVhMjQgMjQgMCAwIDAgLTQuOTItNS43IDIuNCAyLjQgMCAwIDAgLTQgMS42IDE2IDE2IDAgMCAwIDYuMjkgMTQuMXoiLz48cGF0aCBkPSJtMTY2IDU0Ljc3YTUgNSAwIDAgMCAtMS4yMy0xLjc3IDkuMjQgOS4yNCAwIDAgMCAtOS4xNy0yLjMgMy4zMiAzLjMyIDAgMCAwIC0xLjQzIDUuMzQgMTUuMzIgMTUuMzIgMCAwIDAgMTAuNDQgNS42MSAxLjQ4IDEuNDggMCAwIDAgMS41Ni0xLjU4IDQxLjEyIDQxLjEyIDAgMCAxIC0uMTctNS4zeiIvPjxwYXRoIGQ9Im0xOTAuMzQgMzZhNTIuNzEgNTIuNzEgMCAwIDAgLTkgNS45MiA4LjU5IDguNTkgMCAwIDEgNi4zMSA2LjMybDEgNC4wOWE4LjE2IDguMTYgMCAwIDEgLTEuMTkgNi40NXYuMDhjLS4wOS4xMi0uMTkuMjQtLjI4LjM3YTI3LjI2IDI3LjI2IDAgMCAwIDMuMTEtLjA3IDE4LjM1IDE4LjM1IDAgMCAwIDEwLjE3LTQuMTYgODAuMyA4MC4zIDAgMCAwIC0xMC4xMi0xOXoiLz48cGF0aCBkPSJtMTgxIDU2Ljg1LjI0LS4wOWguMTFsLjIzLS4xMWguMDhsLjI3LS4xN2EzLjM1IDMuMzUgMCAwIDAgLjUyLS40N2MuMDctLjA5LjE0LS4xNy4yLS4yNmEyLjYzIDIuNjMgMCAwIDAgLjM4LTJsLTEtNC4wOWEzLjI0IDMuMjQgMCAwIDAgLTMuNjMtMi4yNmwtMi42NS4zM2EzLjYgMy42IDAgMCAwIC0xLjI1LjQgMi45NCAyLjk0IDAgMCAwIC0uNjQuNDUgMy4yMyAzLjIzIDAgMCAwIC0uNDguNTZsLS4xNS4yOHMwIDAgMCAwYTIgMiAwIDAgMCAtLjEyLjMxbC0uMDYuMjhzMCAuMDYgMCAuMDlhMS44NyAxLjg3IDAgMCAwIDAgLjM0djQuNGEyLjg5IDIuODkgMCAwIDAgMi4xIDIuNjcgMy41OCAzLjU4IDAgMCAwIDEuNzkuMTNsMy42LS42My4zNi0uMDh6Ii8+PHBhdGggZD0ibTEyNC4zNiA0OSAuMTktLjA4LjQtLjIuMTQtLjA4YTMuNTggMy41OCAwIDAgMCAuNDYtLjI5IDUuNjYgNS42NiAwIDAgMCAuOTItLjgzIDUuMDcgNS4wNyAwIDAgMCAuMzUtLjQ2IDQuNDYgNC40NiAwIDAgMCAuNjgtMy41NmwtMS42Ny03LjEzYTUuNjYgNS42NiAwIDAgMCAtNi4zNC0zLjk0bC00LjYyLjU3YTUuOTIgNS45MiAwIDAgMCAtMy4yOCAxLjQ4IDUuNDYgNS40NiAwIDAgMCAtLjgzIDFzMCAwIDAgLjA2YTUuNDIgNS40MiAwIDAgMCAtLjI2LjQ4LjMuMyAwIDAgMCAwIC4wOCAzLjgzIDMuODMgMCAwIDAgLS4yMi41Ni4xOS4xOSAwIDAgMSAwIC4wN2MwIC4xNy0uMDguMzMtLjExLjVhLjc3Ljc3IDAgMCAwIDAgLjE1IDMgMyAwIDAgMCAwIC42djcuNjZhMy43NyAzLjc3IDAgMCAwIDAgLjU4IDUuMjcgNS4yNyAwIDAgMCA0LjIgNC4yNSA2LjM2IDYuMzYgMCAwIDAgMi41NC4wNmw2LjI3LTEuMS42My0uMTQuMTktLjA2eiIvPjwvZz48L3N2Zz4=');"></span><span class="custom-icon" style="float:left;width:22px !important;height:22px !important;margin: 5px 5px 0 !important;background-image:url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwLjQ2IDE5NC44NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0ibTE4NC42MSA3NS40MmEyMS40OCAyMS40OCAwIDAgMSAtMzIuNDktOS44NCAyNSAyNSAwIDAgMSAtNC4yNy4zOCAyNC4zMSAyNC4zMSAwIDAgMSAtMjAuOTUtMTEuOTZoLS4xbC0uMzUuMTVjLS4yNy4xLS41My4yLS44Mi4yOWwtLjM1LjExYy0uNDEuMTEtLjguMi0xLjE5LjI3bC02LjI4IDEuMThhMTIuMTIgMTIuMTIgMCAwIDEgLTQuNzYtLjEyIDEwLjkzIDEwLjkzIDAgMCAxIC04LjUxLTkgMTEuMzggMTEuMzggMCAwIDEgLS4wOC0xLjMxdi03LjY1YTEwLjUyIDEwLjUyIDAgMCAxIC4wOS0xLjM0YzAtLjEyIDAtLjIyIDAtLjMyLjA2LS4zNy4xNC0uNzIuMjMtMS4wNmwuMDctLjI1YTExLjY2IDExLjY2IDAgMCAxIC40Ny0xLjI0bC4xMS0uMjNhMTAuNDYgMTAuNDYgMCAwIDEgLjU0LTEgMS4xNyAxLjE3IDAgMCAxIC4wOC0uMTMgMTAuODkgMTAuODkgMCAwIDEgMS43MS0yLjA1bC4wOC0uMDdhMTEuNTQgMTEuNTQgMCAwIDEgNi4zOS0yLjlsNC42MS0uNTdhMTIuMjUgMTIuMjUgMCAwIDEgMS40OC0uMDkgMTEuODggMTEuODggMCAwIDEgNC4wNy43MSAyMS4yMiAyMS4yMiAwIDAgMSAtNS4xMS0xMy44MyAyMC44NCAyMC44NCAwIDAgMSAuMjUtMy4yOCA5My45NCA5My45NCAwIDEgMCA2NS4wNSA2NS4xNHptLTc1LjM5LTUwLjY4YTEuMjcgMS4yNyAwIDEgMSAtMS4yMiAxLjI2IDEuMjYgMS4yNiAwIDAgMSAxLjIyLTEuMjZ6bS01NiAyMC4zMy43My0uNDJhMy4zOCAzLjM4IDAgMCAxIDQuNjIgMS4yNGw1LjQzIDkuNDJhMy4zOSAzLjM5IDAgMCAxIC0xLjI0IDQuNjJsLS43My40MWEzLjM4IDMuMzggMCAwIDEgLTQuNjItMS4yM2wtNS40My05LjQyYTMuMzggMy4zOCAwIDAgMSAxLjE5LTQuNjJ6bS0zMy42NCAzNC4yMWE4LjM4IDguMzggMCAwIDEgLTEuMzctLjg3IDguODkgOC44OSAwIDAgMSAtMS4xMy0xLjA4IDcuMSA3LjEgMCAwIDEgLTEuNDMtMi42NCA2LjI1IDYuMjUgMCAwIDEgLS4xNy0uNzIgNi4xIDYuMSAwIDAgMSAtLjA2LTEuNDggNS44NyA1Ljg3IDAgMCAxIC4zMi0xLjQ5bDMuMzYtOS41Yy4wNi0uMTcuMTMtLjM0LjItLjVsLjA3LS4xNGMuMDYtLjEzLjEzLS4yNS4yLS4zN2wuMDctLjEyLjI5LS40MmExLjQ3IDEuNDcgMCAwIDEgLjEtLjEzIDMuMjMgMy4yMyAwIDAgMSAuMjMtLjI3bC4xNS0uMTcuMjMtLjIyLjI5LS4yNi4yMS0uMTZhMS40NCAxLjQ0IDAgMCAxIC4yNS0uMThsLjE1LS4xYTYuMDkgNi4wOSAwIDAgMSAxLS41NmguMDVhNy40NiA3LjQ2IDAgMCAxIDEuNzEtLjQ4IDguMDggOC4wOCAwIDAgMSAzIC4xbDYgMS4zM2MzLjgzLjg1IDYuNTEgNC4yMSA2LjEyIDcuNjdsLTEuMDYgOS41OWE1Ljg5IDUuODkgMCAwIDEgLTIuMzYgNC4wOGwtLjA5LjA2YTUuMDcgNS4wNyAwIDAgMSAtLjU0LjM2bC0uMS4wNi0uMzEuMTYtLjIxLjEtLjQzLjE4LS4yOS4xLS4yNS4wOC0uNS4xM2gtLjIxbC0uNTUuMDhoLS4xMi0uNTUtLjE1Yy0uMjEgMC0uNDIgMC0uNjMgMGgtLjE0bC0uNjgtLjA4LTguMjUtMS4zNWE4LjIyIDguMjIgMCAwIDEgLTIuNDItLjc5em02LjA4IDI5LjA3YTEuNzkgMS43OSAwIDEgMSAtMS43OCAxLjc5IDEuNzkgMS43OSAwIDAgMSAxLjc4LTEuNzl6bTEwLjkxIDQ3Ljg5YTIuMSAyLjEgMCAxIDEgMi4xLTIuMSAyLjExIDIuMTEgMCAwIDEgLTIuMSAyLjF6bTIuMjctMzEuMTQtOS40MiA1LjQ0YTMuMzggMy4zOCAwIDAgMSAtNC42Mi0xLjI0bC0uNDItLjczYTMuMzkgMy4zOSAwIDAgMSAxLjI0LTQuNTdsOS4zOC01LjQ4YTMuMzggMy4zOCAwIDAgMSA0LjYyIDEuMjNsLjQyLjczYTMuMzggMy4zOCAwIDAgMSAtMS4yIDQuNjJ6bTMuODUtODEuNTlhMi4xIDIuMSAwIDEgMSAyLjEtMi4xIDIuMSAyLjEgMCAwIDEgLTIuMSAyLjF6bTIuNjEgNDcuODItLjA2LS4wOGEyLjc1IDIuNzUgMCAwIDEgLS4xNy0uMjkgMi4zOSAyLjM5IDAgMCAxIC0uMTUtLjM3czAgMCAwLS4wNmEzLjU3IDMuNTcgMCAwIDEgLS4xLS4zNSAzLjUzIDMuNTMgMCAwIDEgLS4wNi0uODYgNCA0IDAgMCAxIC4xNy0uODkgNC4wNiA0LjA2IDAgMCAxIC42OC0xLjQzbDItMi40YTMuNzUgMy43NSAwIDAgMSA0Ljg1LTFsNC4wOCAyLjY0YTMgMyAwIDAgMSAxLjMyIDJ2LjM4YTMuODIgMy44MiAwIDAgMSAtLjA2LjgybC0uMDkuMzV2LjExbC0uMTEuMjdhLjUuNSAwIDAgMSAwIC4xM2wtLjEzLjI2LS4wNi4xMmMtLjA4LjEyLS4xNS4yNC0uMjQuMzZsLTIuNSAzLjQyYTQuMTkgNC4xOSAwIDAgMSAtMS42NyAxLjM5bC0uMzcuMTZhMy42MSAzLjYxIDAgMCAxIC0xLjg5LjE2IDIuMzcgMi4zNyAwIDAgMSAtLjM2LS4wOSAyLjkyIDIuOTIgMCAwIDEgLTEuMjgtLjc4bC0zLjU0LTMuNjZhMy43NiAzLjc2IDAgMCAxIC0uMjYtLjMxem0yMi40NCA2NmE1Ljg0IDUuODQgMCAwIDEgLS4yLjU5IDUuNTIgNS41MiAwIDAgMSAtLjI2LjU1IDUuMTEgNS4xMSAwIDAgMSAtLjc1IDEuMDYgNS4yOSA1LjI5IDAgMCAxIC0uNDEuNDFsLS4xMy4xMWMtLjEyLjEtLjI0LjItLjM3LjI5bC0uMTguMTNjLS4xMy4wOC0uMjYuMTctLjQuMjRsLS4xOC4xMWMtLjIuMS0uNC4yLS42Mi4yOWwtNi4yNCAyLjU0YTYuNjUgNi42NSAwIDAgMSAtMi42My41MSA1LjQ3IDUuNDcgMCAwIDEgLTUuNDYtNGwtMS43NC03LjkyYzAtLjE0LS4wNS0uMjktLjA3LS40M2EuNTcuNTcgMCAwIDEgMC0uMTNjMC0uMTEgMC0uMjIgMC0uMzNzMC0uMDcgMC0uMTEgMC0uMjggMC0uNDFhLjY4LjY4IDAgMCAxIDAtLjE0IDIuNyAyLjcgMCAwIDEgMC0uMjh2LS4xN2wuMDYtLjI2LjA5LS4yOWMwLS4wNyAwLS4xNC4wNy0uMmExLjYgMS42IDAgMCAxIC4xLS4yM2wuMDYtLjE0YTUuNSA1LjUgMCAwIDEgLjQ3LS44MSA1LjkyIDUuOTIgMCAwIDEgMS0xLjA1IDYuNiA2LjYgMCAwIDEgMi4xLTEuMjFsNC42NC0xLjYyYzMtMSA2LjIzLjEyIDcuNDMgMi42NWwzLjMzIDdhNC43NCA0Ljc0IDAgMCAxIC4yOSAzLjIzem00LjI2LTE5LjE1YTIuMSAyLjEgMCAxIDEgMi4xLTIuMSAyLjEgMi4xIDAgMCAxIC0yLjEgMi4xem00LjY0LTI1YTQuNjQgNC42NCAwIDEgMSA0LjY0LTQuNjQgNC42NCA0LjY0IDAgMCAxIC00LjY3IDQuNjZ6bTUuMzYtNzUuMzQtLjQ0LS43MWEzLjM3IDMuMzcgMCAwIDEgMS4wNi00LjY2bDkuMi01LjhhMy4zOCAzLjM4IDAgMCAxIDQuNjYgMS4wNmwuNDUuNzFhMy4zOCAzLjM4IDAgMCAxIC0xLjA2IDQuNjZsLTkuMiA1LjhhMy4zOSAzLjM5IDAgMCAxIC00LjY3LTEuMDZ6bTE0LjI2IDE5LjQ2YTIuMSAyLjEgMCAxIDEgLTIuMS0yLjEgMi4xIDIuMSAwIDAgMSAyLjEgMi4xem02LjcgNjYuMDljLTEgMy4zMy00LjUzIDUuODEtOC44IDUuODFzLTcuODQtMi40OC04Ljc5LTUuODFhMS40IDEuNCAwIDAgMSAxLjM0LTEuNzhoMTQuOWExLjQgMS40IDAgMCAxIDEuMzkgMS43OHptMTMuMjggNDQuNjEtLjcyLjQyYTMuMzcgMy4zNyAwIDAgMSAtNC42Mi0xLjI0bC01LjQ0LTkuNDFhMy4zOCAzLjM4IDAgMCAxIDEuMjQtNC42MmwuNzItLjQyYTMuMzcgMy4zNyAwIDAgMSA0LjYyIDEuMjRsNS40NCA5LjQxYTMuMzcgMy4zNyAwIDAgMSAtMS4yNCA0LjYyem0tOS40MS01OS40MWE0LjY0IDQuNjQgMCAxIDEgNC42NCA0LjY0IDQuNjQgNC42NCAwIDAgMSAtNC42NC00LjY3em0xMS40NS0yNC44Ny0xNC45MSAzLjA4YTMuOCAzLjggMCAxIDEgLTEuNTQtNy40NGwxNC45MS0zLjA5YTMuOCAzLjggMCAxIDEgMS41NCA3LjQ1em04LjkxIDY1Ljg5YTIuMTEgMi4xMSAwIDEgMSAyLjEtMi4xIDIuMSAyLjEgMCAwIDEgLTIuMSAyLjA3em00MS4xLTQzLjc5YTIuMTEgMi4xMSAwIDEgMSAtMi4xLTIuMSAyLjEgMi4xIDAgMCAxIDIuMSAyLjA3em0tMjAuODEtMTAuMTZhNC44NSA0Ljg1IDAgMCAxIC4yMy0xLjE3IDUuNDEgNS40MSAwIDAgMSAuOTUtMS43NmwyLjU3LTMuMTVhNC45MyA0LjkzIDAgMCAxIDYuMzgtMS4zNmw1LjM5IDMuNDZhMy45MSAzLjkxIDAgMCAxIDEuNzMgMi42NSA0IDQgMCAwIDEgLjA2LjUgNS42NSA1LjY1IDAgMCAxIC0uMDcgMS4wOCAzLjkgMy45IDAgMCAxIC0uMTIuNDZzMCAuMDkgMCAuMTQtLjA5LjI0LS4xNC4zN2wtLjA3LjE2Yy0uMDUuMTItLjExLjIzLS4xNy4zNWwtLjA4LjE1Yy0uMS4xNi0uMi4zMi0uMzEuNDhsLTMuMjkgNC40OWE1LjQyIDUuNDIgMCAwIDEgLTEuMTkgMS4yIDQuNjEgNC42MSAwIDAgMSAtNi4wNi0uMTdsLTQuNjUtNC44M2EzLjE5IDMuMTkgMCAwIDEgLS4zMy0uNC40NC40NCAwIDAgMSAtLjA4LS4xMSAzIDMgMCAwIDEgLS4yMy0uMzh2LS4wNmMtLjA3LS4xNS0uMTQtLjMxLS4yLS40OGEuMTkuMTkgMCAwIDEgMC0uMDggNCA0IDAgMCAxIC0uMTMtLjQ2LjQzLjQzIDAgMCAwIDAgMCA0Ljc0IDQuNzQgMCAwIDEgLS4xOS0xLjA4em0xMi4zOSA0OS40MXYuMDZjMCAuMjMtLjA3LjQ3LS4xMi43MWE3LjE4IDcuMTggMCAwIDEgLS41MyAxLjQ3di4wNmMtLjExLjItLjIyLjQtLjM1LjU5bC0uMTIuMThhNC44NCA0Ljg0IDAgMCAxIC0uMzMuNDZjLS4wNi4wNi0uMTEuMTMtLjE2LjE5cy0uMjYuMjktLjM5LjQybC0uMTcuMThjLS4yLjE4LS40MS4zNi0uNjMuNTNsLTYuNCA0Ljk0Yy0zLjU3IDIuNzUtOC42MyAyLTEwLjQ5LTEuNTFsLTQuNTMtOC42YTIuODYgMi44NiAwIDAgMSAtLjIyLS40N2wtLjA2LS4xNGMwLS4xMy0uMDktLjI2LS4xMy0uMzh2LS4xM2MwLS4xNi0uMDgtLjMyLS4xMS0uNDhhMSAxIDAgMCAxIDAtLjE2YzAtLjEyIDAtLjIzLS4wNS0uMzRzMC0uMTQgMC0uMjEgMC0uMjEgMC0uMzIgMC0uMjQgMC0uMzcgMC0uMTcgMC0uMjUgMC0uMiAwLS4zdi0uMTdhNi4wNSA2LjA1IDAgMCAxIC4yOS0xLjA5di0uMDVhNy42MSA3LjYxIDAgMCAxIC43OC0xLjUzIDggOCAwIDAgMSAyLTIuMDdsNC44NS0zLjI5YzMuMTEtMi4xNiA3LjI0LTEuODYgOS40NC42OGw2LjA4IDdhNS42NSA1LjY1IDAgMCAxIDEuMzUgNC4zOXptMTAtMTcuMTctOC43Ni02LjQ1YTMuMzkgMy4zOSAwIDAgMSAtLjcyLTQuNzNsLjUtLjY3YTMuMzcgMy4zNyAwIDAgMSA0LjczLS43Mmw4Ljc1IDYuNDVhMy4zNyAzLjM3IDAgMCAxIC43MiA0LjczbC0uNDkuNjdhMy40IDMuNCAwIDAgMSAtNC43NC43MnoiLz48cGF0aCBkPSJtMTY0LjE5IDkuNzJhOTMuNzggOTMuNzggMCAwIDAgLTMwLjU4LTkuNzIgMjEuODIgMjEuODIgMCAwIDAgLjIgMi44OSAyMS4yOCAyMS4yOCAwIDAgMCA5LjUyIDE0LjkzYzcuNDEtMS4yNCAxNi4zMi0yLjAyIDIwLjg2LTguMXoiLz48cGF0aCBkPSJtMTcwLjMxIDM5LjA4YTYuMTggNi4xOCAwIDAgMCAzLjUxLjY1Yy43Ni0zLjgxLjg5LTcuNDctLjg4LTEwLjY1YTI0IDI0IDAgMCAwIC00LjkyLTUuNyAyLjQgMi40IDAgMCAwIC00IDEuNiAxNiAxNiAwIDAgMCA2LjI5IDE0LjF6Ii8+PHBhdGggZD0ibTE2NiA1NC43N2E1IDUgMCAwIDAgLTEuMjMtMS43NyA5LjI0IDkuMjQgMCAwIDAgLTkuMTctMi4zIDMuMzIgMy4zMiAwIDAgMCAtMS40MyA1LjM0IDE1LjMyIDE1LjMyIDAgMCAwIDEwLjQ0IDUuNjEgMS40OCAxLjQ4IDAgMCAwIDEuNTYtMS41OCA0MS4xMiA0MS4xMiAwIDAgMSAtLjE3LTUuM3oiLz48cGF0aCBkPSJtMTkwLjM0IDM2YTUyLjcxIDUyLjcxIDAgMCAwIC05IDUuOTIgOC41OSA4LjU5IDAgMCAxIDYuMzEgNi4zMmwxIDQuMDlhOC4xNiA4LjE2IDAgMCAxIC0xLjE5IDYuNDV2LjA4Yy0uMDkuMTItLjE5LjI0LS4yOC4zN2EyNy4yNiAyNy4yNiAwIDAgMCAzLjExLS4wNyAxOC4zNSAxOC4zNSAwIDAgMCAxMC4xNy00LjE2IDgwLjMgODAuMyAwIDAgMCAtMTAuMTItMTl6Ii8+PHBhdGggZD0ibTE4MSA1Ni44NS4yNC0uMDloLjExbC4yMy0uMTFoLjA4bC4yNy0uMTdhMy4zNSAzLjM1IDAgMCAwIC41Mi0uNDdjLjA3LS4wOS4xNC0uMTcuMi0uMjZhMi42MyAyLjYzIDAgMCAwIC4zOC0ybC0xLTQuMDlhMy4yNCAzLjI0IDAgMCAwIC0zLjYzLTIuMjZsLTIuNjUuMzNhMy42IDMuNiAwIDAgMCAtMS4yNS40IDIuOTQgMi45NCAwIDAgMCAtLjY0LjQ1IDMuMjMgMy4yMyAwIDAgMCAtLjQ4LjU2bC0uMTUuMjhzMCAwIDAgMGEyIDIgMCAwIDAgLS4xMi4zMWwtLjA2LjI4czAgLjA2IDAgLjA5YTEuODcgMS44NyAwIDAgMCAwIC4zNHY0LjRhMi44OSAyLjg5IDAgMCAwIDIuMSAyLjY3IDMuNTggMy41OCAwIDAgMCAxLjc5LjEzbDMuNi0uNjMuMzYtLjA4eiIvPjxwYXRoIGQ9Im0xMjQuMzYgNDkgLjE5LS4wOC40LS4yLjE0LS4wOGEzLjU4IDMuNTggMCAwIDAgLjQ2LS4yOSA1LjY2IDUuNjYgMCAwIDAgLjkyLS44MyA1LjA3IDUuMDcgMCAwIDAgLjM1LS40NiA0LjQ2IDQuNDYgMCAwIDAgLjY4LTMuNTZsLTEuNjctNy4xM2E1LjY2IDUuNjYgMCAwIDAgLTYuMzQtMy45NGwtNC42Mi41N2E1LjkyIDUuOTIgMCAwIDAgLTMuMjggMS40OCA1LjQ2IDUuNDYgMCAwIDAgLS44MyAxczAgMCAwIC4wNmE1LjQyIDUuNDIgMCAwIDAgLS4yNi40OC4zLjMgMCAwIDAgMCAuMDggMy44MyAzLjgzIDAgMCAwIC0uMjIuNTYuMTkuMTkgMCAwIDEgMCAuMDdjMCAuMTctLjA4LjMzLS4xMS41YS43Ny43NyAwIDAgMCAwIC4xNSAzIDMgMCAwIDAgMCAuNnY3LjY2YTMuNzcgMy43NyAwIDAgMCAwIC41OCA1LjI3IDUuMjcgMCAwIDAgNC4yIDQuMjUgNi4zNiA2LjM2IDAgMCAwIDIuNTQuMDZsNi4yNy0xLjEuNjMtLjE0LjE5LS4wNnoiLz48L2c+PC9zdmc+');display:none;"></span>Cookies</a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-rcb-top-node-default" class="ab-submenu"><li id="wp-admin-bar-rcb-scanner-scan-again"><a class="ab-item" href="/kom-bs/wordpress/copy-js/?preview_id=4603&amp;preview_nonce=43e3b06d52&amp;preview=true&amp;rcb-scan-this-site=1&amp;_wpnonce=9f329c8251">Diese Seite scannen</a></li><li id="wp-admin-bar-rcb-settings"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/admin.php?page=real-cookie-banner-component">Einstellungen</a></li><li id="wp-admin-bar-rcb-cookie-banner-active"><div class="ab-item ab-empty-item">Cookie Banner: <span style="color:#b63c3c;">⬤</span> Deaktiviert</div></li><li id="wp-admin-bar-rcb-content-blocker-active"><div class="ab-item ab-empty-item">Content Blocker: <span style="color:#b63c3c;">⬤</span> Deaktiviert</div></li></ul></div></li><li id="wp-admin-bar-elementor_notes"><a class="ab-item" href="#">Notes</a></li></ul><ul id="wp-admin-bar-top-secondary" class="ab-top-secondary ab-top-menu"><li id="wp-admin-bar-search" class="admin-bar-search"><div class="ab-item ab-empty-item" tabindex="-1"><form action="https://dev-typografix.de/kom-bs/wordpress/" method="get" id="adminbarsearch"><input class="adminbar-input" name="s" id="adminbar-search" type="text" value="" maxlength="150"><label for="adminbar-search" class="screen-reader-text">Suchen</label><input type="submit" class="adminbar-button" value="Suchen"></form></div></li><li id="wp-admin-bar-my-account" class="menupop with-avatar"><a class="ab-item" aria-haspopup="true" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/profile.php">Willkommen, <span class="display-name">11614_ADMINnatalie</span><img alt="" src="https://secure.gravatar.com/avatar/62686ff843b697c5a741542acd02d12a?s=26&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/62686ff843b697c5a741542acd02d12a?s=52&amp;d=mm&amp;r=g 2x" class="avatar avatar-26 photo" height="26" width="26" loading="lazy" decoding="async"></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-user-actions" class="ab-submenu"><li id="wp-admin-bar-user-info"><a class="ab-item" tabindex="-1" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/profile.php"><img alt="" src="https://secure.gravatar.com/avatar/62686ff843b697c5a741542acd02d12a?s=64&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/62686ff843b697c5a741542acd02d12a?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64" loading="lazy" decoding="async"><span class="display-name">11614_ADMINnatalie</span></a></li><li id="wp-admin-bar-edit-profile"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/wp-admin/profile.php">Profil bearbeiten</a></li><li id="wp-admin-bar-logout"><a class="ab-item" href="https://dev-typografix.de/kom-bs/wordpress/login/?action=logout&amp;_wpnonce=0f860bf98a">Abmelden</a></li></ul></div></li></ul>			</div>
                <a class="screen-reader-shortcut" href="https://dev-typografix.de/kom-bs/wordpress/login/?action=logout&amp;_wpnonce=0f860bf98a">Abmelden</a>
            </div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0.49803921568627"></feFuncR><feFuncG type="table" tableValues="0 0.49803921568627"></feFuncG><feFuncB type="table" tableValues="0 0.49803921568627"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1"></feFuncR><feFuncG type="table" tableValues="0 1"></feFuncG><feFuncB type="table" tableValues="0 1"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765"></feFuncR><feFuncG type="table" tableValues="0 1"></feFuncG><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1"></feFuncR><feFuncG type="table" tableValues="0 0.27843137254902"></feFuncG><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0"></feFuncR><feFuncG type="table" tableValues="0 0.64705882352941"></feFuncG><feFuncB type="table" tableValues="0 1"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.78039215686275 1"></feFuncR><feFuncG type="table" tableValues="0 0.94901960784314"></feFuncG><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745"></feFuncR><feFuncG type="table" tableValues="0 1"></feFuncG><feFuncB type="table" tableValues="0.44705882352941 0.4"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.098039215686275 1"></feFuncR><feFuncG type="table" tableValues="0 0.66274509803922"></feFuncG><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725"></feFuncB><feFuncA type="table" tableValues="1 1"></feFuncA></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"></feComposite></filter></defs></svg>
<a class="skip-link screen-reader-text" href="#content">Zum Inhalt wechseln</a>

<div data-elementor-type="header" data-elementor-id="990" class="elementor elementor-990 elementor-location-header" data-elementor-post-type="elementor_library">
                <div class="elementor-element elementor-element-4d4ecccd e-con-full e-flex e-con" data-id="4d4ecccd" data-element_type="container" id="header-kom" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
<div class="elementor-element elementor-element-73cef68d e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con" data-id="73cef68d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
        <div class="elementor-element elementor-element-6dac08ef elementor-widget-mobile_extra__width-initial elementor-widget elementor-widget-image" data-id="6dac08ef" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
    <style>/*! elementor - v3.14.0 - 26-06-2023 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>												<img width="449" height="254" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header.png" class="attachment-large size-large wp-image-693" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header.png 449w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header-300x170.png 300w" sizes="(max-width: 449px) 100vw, 449px">															</div>
        </div>
        </div>
<div class="elementor-element elementor-element-5d7a46f e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet e-flex e-con" data-id="5d7a46f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;position&quot;:&quot;fixed&quot;}">
        <div class="elementor-element elementor-element-a6c25a0 elementor-nav-menu--dropdown-mobile_extra elementor-fixed elementor-nav-menu--stretch elementor-widget-mobile_extra__width-inherit elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="a6c25a0" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;,&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
        <div class="elementor-widget-container">
    <link rel="stylesheet" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/custom-pro-widget-nav-menu.min.css?ver=1689683643">			<nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
        <ul id="menu-1-a6c25a0" class="elementor-nav-menu" data-smartmenus-id="16897552413739456"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-28"><a href="https://dev-typografix.de/kom-bs/wordpress/" class="elementor-item">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1249"><a href="https://dev-typografix.de/kom-bs/wordpress/ueber-uns/" class="elementor-item has-submenu" id="sm-16897552413739456-1" aria-haspopup="true" aria-controls="sm-16897552413739456-2" aria-expanded="false">Über uns<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413739456-2" role="group" aria-hidden="true" aria-labelledby="sm-16897552413739456-1" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1426"><a href="https://dev-typografix.de/kom-bs/wordpress/traegersitz-braunschweig/" class="elementor-sub-item">Trägersitz Braunschweig</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3185"><a href="https://dev-typografix.de/kom-bs/wordpress/teams/" class="elementor-item has-submenu" id="sm-16897552413739456-3" aria-haspopup="true" aria-controls="sm-16897552413739456-4" aria-expanded="false">Teams<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413739456-4" role="group" aria-hidden="true" aria-labelledby="sm-16897552413739456-3" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/" class="elementor-sub-item">Team Braunschweig</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2137"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/" class="elementor-sub-item">Team Gifhorn</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1808"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/" class="elementor-sub-item">Team Wolfsburg</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2136"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/" class="elementor-sub-item">Team Wolfenbüttel</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2314"><a href="https://dev-typografix.de/kom-bs/wordpress/fachteam-jugendhilfefamilien/" class="elementor-sub-item">Fachteam Jugendhilfefamilien</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1029"><a href="https://dev-typografix.de/kom-bs/wordpress/angebotsformen/" class="elementor-item has-submenu" id="sm-16897552413739456-5" aria-haspopup="true" aria-controls="sm-16897552413739456-6" aria-expanded="false">Angebotsformen<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413739456-6" role="group" aria-hidden="true" aria-labelledby="sm-16897552413739456-5" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2627"><a href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/" class="elementor-sub-item">Erziehungsstellen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-933"><a href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/" class="elementor-sub-item">Familiengruppen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2696"><a href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/" class="elementor-sub-item">Familienanaloges Wohnen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2308"><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/" class="elementor-sub-item">Ambulante Hilfen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2309"><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/" class="elementor-sub-item">Mobile Betreuung</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2709"><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/" class="elementor-sub-item">JuKoS</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1699"><a href="https://dev-typografix.de/kom-bs/wordpress/jobs/" class="elementor-item">Jobs</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1624"><a href="https://dev-typografix.de/kom-bs/wordpress/familien-gesucht/" class="elementor-item">Familien gesucht</a></li>
</ul>			</nav>
            <div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" >
    <span class="elementor-menu-toggle__icon--open"><svg xmlns="http://www.w3.org/2000/svg" width="89" height="41" viewBox="0 0 89 41"><g id="Gruppe_512" data-name="Gruppe 512" transform="translate(-1746 76)"><g id="Rechteck_1712" data-name="Rechteck 1712" transform="translate(1746 -76)" fill="#fff" stroke="#fff" stroke-width="3"><rect width="89" height="41" rx="10" stroke="none"></rect><rect x="1.5" y="1.5" width="86" height="38" rx="8.5" fill="none"></rect></g><text id="Menü" transform="translate(1757 -64)" fill="#ec6f22" font-size="16" font-family="Ubuntu-Light, Ubuntu" font-weight="300"><tspan x="6.728" y="15">MENÜ</tspan></text></g></svg></span><i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i>			<span class="elementor-screen-only">Menü</span>
</div>
            <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style="top: 0px; --menu-height: 0; width: 904px; left: 0px;">
        <ul id="menu-2-a6c25a0" class="elementor-nav-menu" data-smartmenus-id="1689755241375641"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-28"><a href="https://dev-typografix.de/kom-bs/wordpress/" class="elementor-item" tabindex="-1">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1249"><a href="https://dev-typografix.de/kom-bs/wordpress/ueber-uns/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241375641-1" aria-haspopup="true" aria-controls="sm-1689755241375641-2" aria-expanded="false">Über uns<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241375641-2" role="group" aria-hidden="true" aria-labelledby="sm-1689755241375641-1" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1426"><a href="https://dev-typografix.de/kom-bs/wordpress/traegersitz-braunschweig/" class="elementor-sub-item" tabindex="-1">Trägersitz Braunschweig</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3185"><a href="https://dev-typografix.de/kom-bs/wordpress/teams/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241375641-3" aria-haspopup="true" aria-controls="sm-1689755241375641-4" aria-expanded="false">Teams<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241375641-4" role="group" aria-hidden="true" aria-labelledby="sm-1689755241375641-3" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/" class="elementor-sub-item" tabindex="-1">Team Braunschweig</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2137"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/" class="elementor-sub-item" tabindex="-1">Team Gifhorn</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1808"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/" class="elementor-sub-item" tabindex="-1">Team Wolfsburg</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2136"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/" class="elementor-sub-item" tabindex="-1">Team Wolfenbüttel</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2314"><a href="https://dev-typografix.de/kom-bs/wordpress/fachteam-jugendhilfefamilien/" class="elementor-sub-item" tabindex="-1">Fachteam Jugendhilfefamilien</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1029"><a href="https://dev-typografix.de/kom-bs/wordpress/angebotsformen/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241375641-5" aria-haspopup="true" aria-controls="sm-1689755241375641-6" aria-expanded="false">Angebotsformen<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241375641-6" role="group" aria-hidden="true" aria-labelledby="sm-1689755241375641-5" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2627"><a href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/" class="elementor-sub-item" tabindex="-1">Erziehungsstellen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-933"><a href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/" class="elementor-sub-item" tabindex="-1">Familiengruppen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2696"><a href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/" class="elementor-sub-item" tabindex="-1">Familienanaloges Wohnen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2308"><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/" class="elementor-sub-item" tabindex="-1">Ambulante Hilfen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2309"><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/" class="elementor-sub-item" tabindex="-1">Mobile Betreuung</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2709"><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/" class="elementor-sub-item" tabindex="-1">JuKoS</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1699"><a href="https://dev-typografix.de/kom-bs/wordpress/jobs/" class="elementor-item" tabindex="-1">Jobs</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1624"><a href="https://dev-typografix.de/kom-bs/wordpress/familien-gesucht/" class="elementor-item" tabindex="-1">Familien gesucht</a></li>
</ul>			</nav>
        </div>
        </div>
        </div>
<div class="elementor-element elementor-element-508f5325 e-con-full elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con" data-id="508f5325" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-634e5709 elementor-nav-menu__align-justify elementor-fixed elementor-nav-menu--dropdown-none elementor-widget__width-initial elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-nav-menu" data-id="634e5709" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;}}" data-widget_type="nav-menu.default">
        <div class="elementor-widget-container">
                <nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-grow">
        <ul id="menu-1-634e5709" class="elementor-nav-menu" data-smartmenus-id="16897552413781135"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-28"><a href="https://dev-typografix.de/kom-bs/wordpress/" class="elementor-item">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1249"><a href="https://dev-typografix.de/kom-bs/wordpress/ueber-uns/" class="elementor-item has-submenu" id="sm-16897552413781135-1" aria-haspopup="true" aria-controls="sm-16897552413781135-2" aria-expanded="false">Über uns<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413781135-2" role="group" aria-hidden="true" aria-labelledby="sm-16897552413781135-1" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1426"><a href="https://dev-typografix.de/kom-bs/wordpress/traegersitz-braunschweig/" class="elementor-sub-item">Trägersitz Braunschweig</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3185"><a href="https://dev-typografix.de/kom-bs/wordpress/teams/" class="elementor-item has-submenu" id="sm-16897552413781135-3" aria-haspopup="true" aria-controls="sm-16897552413781135-4" aria-expanded="false">Teams<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413781135-4" role="group" aria-hidden="true" aria-labelledby="sm-16897552413781135-3" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/" class="elementor-sub-item">Team Braunschweig</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2137"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/" class="elementor-sub-item">Team Gifhorn</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1808"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/" class="elementor-sub-item">Team Wolfsburg</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2136"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/" class="elementor-sub-item">Team Wolfenbüttel</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2314"><a href="https://dev-typografix.de/kom-bs/wordpress/fachteam-jugendhilfefamilien/" class="elementor-sub-item">Fachteam Jugendhilfefamilien</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1029"><a href="https://dev-typografix.de/kom-bs/wordpress/angebotsformen/" class="elementor-item has-submenu" id="sm-16897552413781135-5" aria-haspopup="true" aria-controls="sm-16897552413781135-6" aria-expanded="false">Angebotsformen<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16897552413781135-6" role="group" aria-hidden="true" aria-labelledby="sm-16897552413781135-5" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2627"><a href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/" class="elementor-sub-item">Erziehungsstellen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-933"><a href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/" class="elementor-sub-item">Familiengruppen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2696"><a href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/" class="elementor-sub-item">Familienanaloges Wohnen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2308"><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/" class="elementor-sub-item">Ambulante Hilfen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2309"><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/" class="elementor-sub-item">Mobile Betreuung</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2709"><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/" class="elementor-sub-item">JuKoS</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1699"><a href="https://dev-typografix.de/kom-bs/wordpress/jobs/" class="elementor-item">Jobs</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1624"><a href="https://dev-typografix.de/kom-bs/wordpress/familien-gesucht/" class="elementor-item">Familien gesucht</a></li>
</ul>			</nav>
                <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style="--menu-height: 0;">
        <ul id="menu-2-634e5709" class="elementor-nav-menu" data-smartmenus-id="1689755241380177"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-28"><a href="https://dev-typografix.de/kom-bs/wordpress/" class="elementor-item" tabindex="-1">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1249"><a href="https://dev-typografix.de/kom-bs/wordpress/ueber-uns/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241380177-1" aria-haspopup="true" aria-controls="sm-1689755241380177-2" aria-expanded="false">Über uns<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241380177-2" role="group" aria-hidden="true" aria-labelledby="sm-1689755241380177-1" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1426"><a href="https://dev-typografix.de/kom-bs/wordpress/traegersitz-braunschweig/" class="elementor-sub-item" tabindex="-1">Trägersitz Braunschweig</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3185"><a href="https://dev-typografix.de/kom-bs/wordpress/teams/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241380177-3" aria-haspopup="true" aria-controls="sm-1689755241380177-4" aria-expanded="false">Teams<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241380177-4" role="group" aria-hidden="true" aria-labelledby="sm-1689755241380177-3" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/" class="elementor-sub-item" tabindex="-1">Team Braunschweig</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2137"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/" class="elementor-sub-item" tabindex="-1">Team Gifhorn</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1808"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/" class="elementor-sub-item" tabindex="-1">Team Wolfsburg</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2136"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/" class="elementor-sub-item" tabindex="-1">Team Wolfenbüttel</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2314"><a href="https://dev-typografix.de/kom-bs/wordpress/fachteam-jugendhilfefamilien/" class="elementor-sub-item" tabindex="-1">Fachteam Jugendhilfefamilien</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1029"><a href="https://dev-typografix.de/kom-bs/wordpress/angebotsformen/" class="elementor-item has-submenu" tabindex="-1" id="sm-1689755241380177-5" aria-haspopup="true" aria-controls="sm-1689755241380177-6" aria-expanded="false">Angebotsformen<span class="sub-arrow"><i class="fas fa-caret-down"></i></span></a>
<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1689755241380177-6" role="group" aria-hidden="true" aria-labelledby="sm-1689755241380177-5" aria-expanded="false">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2627"><a href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/" class="elementor-sub-item" tabindex="-1">Erziehungsstellen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-933"><a href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/" class="elementor-sub-item" tabindex="-1">Familiengruppen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2696"><a href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/" class="elementor-sub-item" tabindex="-1">Familienanaloges Wohnen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2308"><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/" class="elementor-sub-item" tabindex="-1">Ambulante Hilfen</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2309"><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/" class="elementor-sub-item" tabindex="-1">Mobile Betreuung</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2709"><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/" class="elementor-sub-item" tabindex="-1">JuKoS</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1699"><a href="https://dev-typografix.de/kom-bs/wordpress/jobs/" class="elementor-item" tabindex="-1">Jobs</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1624"><a href="https://dev-typografix.de/kom-bs/wordpress/familien-gesucht/" class="elementor-item" tabindex="-1">Familien gesucht</a></li>
</ul>			</nav>
        </div>
        </div>
        <div class="elementor-element elementor-element-41607993 elementor-fixed elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="41607993" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                        <a href="mailto:info@kom-bs.de">
                    <img width="76" height="76" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/at-1.png" class="attachment-large size-large wp-image-989" alt="" loading="lazy">								</a>
                                                    </div>
        </div>
        </div>
<div class="elementor-element elementor-element-71c2a2c e-con-full elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con" data-id="71c2a2c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-a823494 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="a823494" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                        <a href="https://dev-typografix.de/kom-bs/wordpress">
                    <img width="449" height="254" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header.png" class="attachment-full size-full wp-image-693" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header.png 449w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/Logo-header-300x170.png 300w" sizes="(max-width: 449px) 100vw, 449px">								</a>
                                                    </div>
        </div>
        </div>
        </div>
                </div>

<main id="content" class="site-main post-4603 page type-page status-publish hentry">


<div class="page-content">
        <div data-elementor-type="wp-page" data-elementor-id="4603" class="elementor elementor-4603" data-elementor-post-type="revision">
                    <div class="elementor-element elementor-element-a977c0b e-con-full e-flex e-con" data-id="a977c0b" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-224eab1 elementor-fixed elementor-hidden-mobile elementor-hidden-mobile_extra elementor-widget elementor-widget-image" data-id="224eab1" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="1938" height="681" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header.jpg" class="attachment-full size-full wp-image-1157" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header.jpg 1938w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header-300x105.jpg 300w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header-1024x360.jpg 1024w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header-768x270.jpg 768w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebotsformen-header-1536x540.jpg 1536w" sizes="(max-width: 1938px) 100vw, 1938px">															</div>
        </div>
        <div class="elementor-element elementor-element-b63823d elementor-fixed elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="b63823d" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="879" height="1106" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebot-mobil-header.jpg" class="attachment-full size-full wp-image-1194" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebot-mobil-header.jpg 879w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebot-mobil-header-238x300.jpg 238w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebot-mobil-header-814x1024.jpg 814w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/angebot-mobil-header-768x966.jpg 768w" sizes="(max-width: 879px) 100vw, 879px">															</div>
        </div>
        </div>
<div class="elementor-element elementor-element-0847980 e-con-full e-flex e-con" data-id="0847980" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-element elementor-element-e1842d3 e-con-full e-flex e-con" data-id="e1842d3" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-d26d9bb elementor-widget elementor-widget-heading" data-id="d26d9bb" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <style>/*! elementor - v3.14.0 - 26-06-2023 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h2 class="elementor-heading-title elementor-size-default">Angebotsformen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-1fe72d5 elementor-widget elementor-widget-text-editor" data-id="1fe72d5" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
    <style>/*! elementor - v3.14.0 - 26-06-2023 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>Grundsätzlich streben wir in enger Zusammenarbeit mit den Jugendämtern und anderen Auftraggebern möglichst passgenaue, bedarfsorientierte Angebotsformen an, die den individuellen Bedürfnissen der von uns betreuten Menschen entsprechen und während des Betreuungsverlaufes permanent überprüft, verändert und angeglichen werden.</p><p>Vor dem Hintergrund des gesetzlichen Kontextes (SGB VIII und bei Bedarf SGB IX) unterscheiden wir folgende Angebotsformen:</p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-dda8860 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con-boxed e-con" data-id="dda8860" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-2fca22f e-con-full e-flex e-con" data-id="2fca22f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-element elementor-element-810b2e7 e-con-full e-flex e-con" data-id="810b2e7" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-fc54764 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="fc54764" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-fc54764" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="fc54764">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="mobile-betreuung-mob" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="mobile-betreuung-mob-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Mobile Betreuung (Mob)</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="mobile-betreuung-mob-tab" class="clearfix eael-tab-content-item inactive" data-title-link="mobile-betreuung-mob-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="1073" class="elementor elementor-1073 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-f464a5c e-flex e-con-boxed e-con" data-id="f464a5c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-a8920f1 e-con-full e-flex e-con" data-id="a8920f1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-bc5d576 elementor-widget elementor-widget-heading" data-id="bc5d576" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Mobile Betreuung</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-268face elementor-widget elementor-widget-text-editor" data-id="268face" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Das Angebot der Mobilen Betreuung (MoB) richtet sich an junge Menschen ab 16 Jahren und deren Familien. Trotz der Tatsache, dass die Mobile Betreuung eine Angebotsform darstellt, in der Jugendliche außerhalb des eigenen Elternhauses in eigens dafür vom Träger angemieteten Wohnungen betreut werden, richtet sich die MOB als stationäres Angebot an die gesamte Familie.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/">Erfahren Sie mehr über die Mobile Betreuung</a></p><p><a href="#">Zum Erklärfilm über die Mobile Betreuung</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-7b9124d e-flex e-con-boxed e-con" data-id="7b9124d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-e8aa86b elementor-widget elementor-widget-heading" data-id="e8aa86b" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-6f1ea59 e-flex e-con-boxed e-con" data-id="6f1ea59" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-5bd9d6b e-flex e-con-boxed e-con" data-id="5bd9d6b" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-1091df8 elementor-widget elementor-widget-heading" data-id="1091df8" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-bd171c4 e-flex e-con-boxed e-con" data-id="bd171c4" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-2fd9e27 elementor-widget elementor-widget-heading" data-id="2fd9e27" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/">Wolfsburg</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-00bf70d e-flex e-con-boxed e-con" data-id="00bf70d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-ec89d4e elementor-widget elementor-widget-heading" data-id="ec89d4e" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/">Braunschweig</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-7cab36c e-flex e-con-boxed e-con" data-id="7cab36c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-37806e6 elementor-widget elementor-widget-heading" data-id="37806e6" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/">Wolfenbüttel</a></h2>		</div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-f0bd25a e-flex e-con-boxed e-con" data-id="f0bd25a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-8ed3f24 elementor-widget elementor-widget-image" data-id="8ed3f24" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob.jpg" class="attachment-large size-large wp-image-4355" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-08752b4 elementor-widget__width-inherit elementor-widget-mobile_extra__width-inherit elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-eael-adv-tabs" data-id="08752b4" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-08752b4" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="08752b4">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="mobile-betreuung-mob" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="mobile-betreuung-mob-tab" aria-expanded="true" class="inactive eael-tab-item-trigger">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Mobile Betreuung (MoB)</span>                                                    </li>
                                    <li id="ambulante-hilfen" class="inactive eael-tab-item-trigger" aria-selected="false" data-tab="2" role="tab" tabindex="-1" aria-controls="ambulante-hilfen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Ambulante Hilfen</span>                                                    </li>
                                    <li id="jugendhilfe-im-kontext-schule-jukos" class="inactive eael-tab-item-trigger" aria-selected="false" data-tab="3" role="tab" tabindex="-1" aria-controls="jugendhilfe-im-kontext-schule-jukos-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Jugendhilfe im Kontext Schule (JuKoS)</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="mobile-betreuung-mob-tab" class="clearfix eael-tab-content-item inactive" data-title-link="mobile-betreuung-mob-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="1073" class="elementor elementor-1073 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-f464a5c e-flex e-con-boxed e-con" data-id="f464a5c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-a8920f1 e-con-full e-flex e-con" data-id="a8920f1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-bc5d576 elementor-widget elementor-widget-heading" data-id="bc5d576" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Mobile Betreuung</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-268face elementor-widget elementor-widget-text-editor" data-id="268face" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Das Angebot der Mobilen Betreuung (MoB) richtet sich an junge Menschen ab 16 Jahren und deren Familien. Trotz der Tatsache, dass die Mobile Betreuung eine Angebotsform darstellt, in der Jugendliche außerhalb des eigenen Elternhauses in eigens dafür vom Träger angemieteten Wohnungen betreut werden, richtet sich die MOB als stationäres Angebot an die gesamte Familie.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/mobile-betreuung/">Erfahren Sie mehr über die Mobile Betreuung</a></p><p><a href="#">Zum Erklärfilm über die Mobile Betreuung</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-7b9124d e-flex e-con-boxed e-con" data-id="7b9124d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-e8aa86b elementor-widget elementor-widget-heading" data-id="e8aa86b" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-6f1ea59 e-flex e-con-boxed e-con" data-id="6f1ea59" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-5bd9d6b e-flex e-con-boxed e-con" data-id="5bd9d6b" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-1091df8 elementor-widget elementor-widget-heading" data-id="1091df8" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-bd171c4 e-flex e-con-boxed e-con" data-id="bd171c4" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-2fd9e27 elementor-widget elementor-widget-heading" data-id="2fd9e27" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfsburg/">Wolfsburg</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-00bf70d e-flex e-con-boxed e-con" data-id="00bf70d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-ec89d4e elementor-widget elementor-widget-heading" data-id="ec89d4e" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/">Braunschweig</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-7cab36c e-flex e-con-boxed e-con" data-id="7cab36c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-37806e6 elementor-widget elementor-widget-heading" data-id="37806e6" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/">Wolfenbüttel</a></h2>		</div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-f0bd25a e-flex e-con-boxed e-con" data-id="f0bd25a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-8ed3f24 elementor-widget elementor-widget-image" data-id="8ed3f24" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob.jpg" class="attachment-large size-large wp-image-4355" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/03/karte-mob-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
        
            <div id="ambulante-hilfen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="ambulante-hilfen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3203" class="elementor elementor-3203 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-79a2bd9a e-flex e-con-boxed e-con" data-id="79a2bd9a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-44f41bb6 e-con-full e-flex e-con" data-id="44f41bb6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-53dfc878 elementor-widget elementor-widget-heading" data-id="53dfc878" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Ambulante Hilfen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-c9f8a6f elementor-widget elementor-widget-text-editor" data-id="c9f8a6f" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Kompetenz für Menschen (KOM) bietet ambulante Hilfen für Kinder, Jugendliche, junge Erwachsene und für Familien, gleich welcher Konstelation an.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/">Erfahren Sie mehr über die Ambulante Hilfen</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-4830891 e-flex e-con-boxed e-con" data-id="4830891" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-1f0175ea elementor-widget elementor-widget-heading" data-id="1f0175ea" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-c969fdc e-flex e-con-boxed e-con" data-id="c969fdc" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-5ff46a09 e-flex e-con-boxed e-con" data-id="5ff46a09" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-3da59b50 elementor-widget elementor-widget-heading" data-id="3da59b50" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/#amb-bs">Braunschweig</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-d3414b1 e-flex e-con-boxed e-con" data-id="d3414b1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-9241b4a elementor-widget elementor-widget-heading" data-id="9241b4a" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/#amb-gf">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-48415fa9 e-flex e-con-boxed e-con" data-id="48415fa9" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-2f4c74c5 elementor-widget elementor-widget-heading" data-id="2f4c74c5" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/#amb-wf">Wolfenbüttel</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-6866a17 e-flex e-con-boxed e-con" data-id="6866a17" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-35d314f0 e-flex e-con-boxed e-con" data-id="35d314f0" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-580e7b73 elementor-widget elementor-widget-image" data-id="580e7b73" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant.jpg" class="attachment-large size-large wp-image-4351" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
        
            <div id="jugendhilfe-im-kontext-schule-jukos-tab" class="clearfix eael-tab-content-item inactive" data-title-link="jugendhilfe-im-kontext-schule-jukos-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3213" class="elementor elementor-3213 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-649f2db6 e-flex e-con-boxed e-con" data-id="649f2db6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-19ab2582 e-con-full e-flex e-con" data-id="19ab2582" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-3c338ca2 elementor-widget elementor-widget-heading" data-id="3c338ca2" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Jugendliche im Kontext Schule</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-56dad413 elementor-widget elementor-widget-text-editor" data-id="56dad413" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Jugendhilfe im Kontext Schule (JuKoS) versteht sich als ganzheitliches Angebot, welches wesentliche Lebensbereiche von Kindern und Jugendlichen verbindet. Es handelt sich hierbei um ein niedrigschwelliges und präventiv ansetzendes Angebot, welches von Beginn an daran orientiert ist, in enger Kooperation mit allen Beteiligten zu agieren und dabei maximale Transparenz anstrebt. PartnerInnen im Rahmen einer JuKoS-Hilfe sind immer mindestens das Kind, der junge Mensch und seine Familie, der Leistungsträger (Jugendamt), der Leistungserbringer (freier Träger) und die Schule.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/">Erfahren Sie mehr über die JuKoS</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-674770ff e-flex e-con-boxed e-con" data-id="674770ff" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-57f4743c elementor-widget elementor-widget-heading" data-id="57f4743c" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-404b79aa e-flex e-con-boxed e-con" data-id="404b79aa" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-60ec7da e-flex e-con-boxed e-con" data-id="60ec7da" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-3bac9718 elementor-widget elementor-widget-heading" data-id="3bac9718" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/#gf-jukos">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-19fabfc2 e-flex e-con-boxed e-con" data-id="19fabfc2" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
<div class="elementor-element elementor-element-7cb9e329 e-flex e-con-boxed e-con" data-id="7cb9e329" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
<div class="elementor-element elementor-element-4c566ff6 e-flex e-con-boxed e-con" data-id="4c566ff6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-6025921 e-flex e-con-boxed e-con" data-id="6025921" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-7a2ab116 elementor-widget elementor-widget-image" data-id="7a2ab116" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos.jpg" class="attachment-large size-large wp-image-4353" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-72411f8 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="72411f8" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-72411f8" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="72411f8">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="ambulante-hilfen-amb" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="ambulante-hilfen-amb-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Ambulante Hilfen (Amb)</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="ambulante-hilfen-amb-tab" class="clearfix eael-tab-content-item inactive" data-title-link="ambulante-hilfen-amb-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3203" class="elementor elementor-3203 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-79a2bd9a e-flex e-con-boxed e-con" data-id="79a2bd9a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-44f41bb6 e-con-full e-flex e-con" data-id="44f41bb6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-53dfc878 elementor-widget elementor-widget-heading" data-id="53dfc878" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Ambulante Hilfen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-c9f8a6f elementor-widget elementor-widget-text-editor" data-id="c9f8a6f" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Kompetenz für Menschen (KOM) bietet ambulante Hilfen für Kinder, Jugendliche, junge Erwachsene und für Familien, gleich welcher Konstelation an.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/ambulante-hilfen/">Erfahren Sie mehr über die Ambulante Hilfen</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-4830891 e-flex e-con-boxed e-con" data-id="4830891" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-1f0175ea elementor-widget elementor-widget-heading" data-id="1f0175ea" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-c969fdc e-flex e-con-boxed e-con" data-id="c969fdc" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-5ff46a09 e-flex e-con-boxed e-con" data-id="5ff46a09" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-3da59b50 elementor-widget elementor-widget-heading" data-id="3da59b50" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-braunschweig/#amb-bs">Braunschweig</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-d3414b1 e-flex e-con-boxed e-con" data-id="d3414b1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-9241b4a elementor-widget elementor-widget-heading" data-id="9241b4a" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/#amb-gf">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-48415fa9 e-flex e-con-boxed e-con" data-id="48415fa9" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-2f4c74c5 elementor-widget elementor-widget-heading" data-id="2f4c74c5" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-wolfenbuettel/#amb-wf">Wolfenbüttel</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-6866a17 e-flex e-con-boxed e-con" data-id="6866a17" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-35d314f0 e-flex e-con-boxed e-con" data-id="35d314f0" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-580e7b73 elementor-widget elementor-widget-image" data-id="580e7b73" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant.jpg" class="attachment-large size-large wp-image-4351" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-ambulant-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-18055c6 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="18055c6" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-18055c6" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="18055c6">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="jugendhilfe-im-kontext-schule-jukos" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="jugendhilfe-im-kontext-schule-jukos-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Jugendhilfe im Kontext Schule (Jukos)</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="jugendhilfe-im-kontext-schule-jukos-tab" class="clearfix eael-tab-content-item inactive" data-title-link="jugendhilfe-im-kontext-schule-jukos-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3213" class="elementor elementor-3213 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-649f2db6 e-flex e-con-boxed e-con" data-id="649f2db6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-19ab2582 e-con-full e-flex e-con" data-id="19ab2582" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-3c338ca2 elementor-widget elementor-widget-heading" data-id="3c338ca2" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Jugendliche im Kontext Schule</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-56dad413 elementor-widget elementor-widget-text-editor" data-id="56dad413" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Jugendhilfe im Kontext Schule (JuKoS) versteht sich als ganzheitliches Angebot, welches wesentliche Lebensbereiche von Kindern und Jugendlichen verbindet. Es handelt sich hierbei um ein niedrigschwelliges und präventiv ansetzendes Angebot, welches von Beginn an daran orientiert ist, in enger Kooperation mit allen Beteiligten zu agieren und dabei maximale Transparenz anstrebt. PartnerInnen im Rahmen einer JuKoS-Hilfe sind immer mindestens das Kind, der junge Mensch und seine Familie, der Leistungsträger (Jugendamt), der Leistungserbringer (freier Träger) und die Schule.</p><p><a href="https://dev-typografix.de/kom-bs/wordpress/jukos/">Erfahren Sie mehr über die JuKoS</a></p>						</div>
        </div>
<div class="elementor-element elementor-element-674770ff e-flex e-con-boxed e-con" data-id="674770ff" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-57f4743c elementor-widget elementor-widget-heading" data-id="57f4743c" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Teams an den Standorten:</h2>		</div>
        </div>
<div class="elementor-element elementor-element-404b79aa e-flex e-con-boxed e-con" data-id="404b79aa" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-60ec7da e-flex e-con-boxed e-con" data-id="60ec7da" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-3bac9718 elementor-widget elementor-widget-heading" data-id="3bac9718" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default"><a href="https://dev-typografix.de/kom-bs/wordpress/team-gifhorn/#gf-jukos">Gifhorn</a></h2>		</div>
        </div>
            </div>
        </div>
<div class="elementor-element elementor-element-19fabfc2 e-flex e-con-boxed e-con" data-id="19fabfc2" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
<div class="elementor-element elementor-element-7cb9e329 e-flex e-con-boxed e-con" data-id="7cb9e329" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
<div class="elementor-element elementor-element-4c566ff6 e-flex e-con-boxed e-con" data-id="4c566ff6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
        </div>
<div class="elementor-element elementor-element-6025921 e-flex e-con-boxed e-con" data-id="6025921" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
        <div class="elementor-element elementor-element-7a2ab116 elementor-widget elementor-widget-image" data-id="7a2ab116" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                                                    <img decoding="async" width="436" height="559" src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos.jpg" class="attachment-large size-large wp-image-4353" alt="" loading="lazy" srcset="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos.jpg 436w, https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/2023/07/karte-jukos-234x300.jpg 234w" sizes="(max-width: 436px) 100vw, 436px">															</div>
        </div>
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-0e5e067 elementor-widget__width-inherit elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-eael-adv-tabs" data-id="0e5e067" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-0e5e067" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="0e5e067">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="erziehungsstellen" class="eael-tab-item-trigger active" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="erziehungsstellen-tab" aria-expanded="true">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Erziehungsstellen</span>                                                    </li>
                                    <li id="familiengruppen" class="inactive eael-tab-item-trigger" aria-selected="false" data-tab="2" role="tab" tabindex="-1" aria-controls="familiengruppen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Familiengruppen</span>                                                    </li>
                                    <li id="familienanaloges-wohnen" class="inactive eael-tab-item-trigger" aria-selected="false" data-tab="3" role="tab" tabindex="-1" aria-controls="familienanaloges-wohnen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Familienanaloges Wohnen</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="erziehungsstellen-tab" class="clearfix eael-tab-content-item active" data-title-link="erziehungsstellen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3233" class="elementor elementor-3233 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-10eff710 e-flex e-con-boxed e-con" data-id="10eff710" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-7b1ddf1f e-con-full e-flex e-con" data-id="7b1ddf1f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-baff81d elementor-widget elementor-widget-heading" data-id="baff81d" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Erziehungsstellen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-5f078857 elementor-widget elementor-widget-text-editor" data-id="5f078857" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Kompetenz für Menschen (KOM) arbeitet mit selbständigen Erziehungsstellen zusammen.</p><p>Erziehungsstellen sind professionell arbeitende Familien, in denen mindestens eine Person eine fachliche Ausbildung besitzt. Sie werden durch qualifizierte Fachberater in ihrer Arbeit begleitet und müssen sich fortlaufend weiterbilden. Sie sind betriebserlaubnispflichtig durch das Niedersächsische Landesamt für Familie, Soziales und Gesundheit.</p><p>Erziehungsstellen dürfen maximal zwei Kinder oder Jugendliche im Alter von 0-18 Jahren in ihren Haushalt aufnehmen.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/">Erfahren Sie mehr über die Erziehungsstellen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-9931e80 e-flex e-con-boxed e-con" data-id="9931e80" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
        
            <div id="familiengruppen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="familiengruppen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3249" class="elementor elementor-3249 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-1aa90b90 e-flex e-con-boxed e-con" data-id="1aa90b90" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-2ca0bf4d e-con-full e-flex e-con" data-id="2ca0bf4d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-17c1cede elementor-widget elementor-widget-heading" data-id="17c1cede" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Familiengruppen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-4a6400cd elementor-widget elementor-widget-text-editor" data-id="4a6400cd" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>In einer Familiengruppe leben bis zu vier Kinder und Jugendliche.</p><p>Alle Familengruppen, die für Kompetenz für Menschen (KOM) tätig sind, haben zunächst als Erziehungsstellen mit uns zusammengearbeitet und konnten Erfahrungen und Kompetenzen erwerben, was das Zusammenleben mit Kindern angeht.</p><p>Familiengruppen sind professionell arbeitende Familien, in denen mindestens eine Person eine fachliche Ausbildung besitzt. Zudem werden sie durch eine zusätzliche Fachkraft unterstützt.</p><p>Sie werden durch qualifizierte FachberaterInnen in ihrer Arbeit begleitet und müssen sich fortlaufend weiterbilden. Sie sind betriebserlaubnispflichtig durch das Niedersächsische Landesamt für Familie, Soziales und Gesundheit.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/">Erfahren Sie mehr über die Familiengruppen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-bfc6dd2 e-flex e-con-boxed e-con" data-id="bfc6dd2" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
        
            <div id="familienanaloges-wohnen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="familienanaloges-wohnen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3255" class="elementor elementor-3255 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-2c97525f e-flex e-con-boxed e-con" data-id="2c97525f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-74cefd59 e-con-full e-flex e-con" data-id="74cefd59" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-6c64dec8 elementor-widget elementor-widget-heading" data-id="6c64dec8" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Familienanaloges Wohnen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-2ec62aa6 elementor-widget elementor-widget-text-editor" data-id="2ec62aa6" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Familienanaloges Wohnen ist eine neue Hilfeform, die gemeinsam mit dem Landkreis Peine entwickelt und inzwischen auch erfolgreich in den Landkreisen Peine und Gifhorn angewandt wird.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/">Erfahren Sie mehr über das familienanaloge Wohnen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-14344221 e-flex e-con-boxed e-con" data-id="14344221" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-0a44709 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="0a44709" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-0a44709" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="0a44709">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="erziehungsstellen" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="erziehungsstellen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Erziehungsstellen</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="erziehungsstellen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="erziehungsstellen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3233" class="elementor elementor-3233 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-10eff710 e-flex e-con-boxed e-con" data-id="10eff710" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-7b1ddf1f e-con-full e-flex e-con" data-id="7b1ddf1f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-baff81d elementor-widget elementor-widget-heading" data-id="baff81d" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Erziehungsstellen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-5f078857 elementor-widget elementor-widget-text-editor" data-id="5f078857" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Kompetenz für Menschen (KOM) arbeitet mit selbständigen Erziehungsstellen zusammen.</p><p>Erziehungsstellen sind professionell arbeitende Familien, in denen mindestens eine Person eine fachliche Ausbildung besitzt. Sie werden durch qualifizierte Fachberater in ihrer Arbeit begleitet und müssen sich fortlaufend weiterbilden. Sie sind betriebserlaubnispflichtig durch das Niedersächsische Landesamt für Familie, Soziales und Gesundheit.</p><p>Erziehungsstellen dürfen maximal zwei Kinder oder Jugendliche im Alter von 0-18 Jahren in ihren Haushalt aufnehmen.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/erziehungsstellen/">Erfahren Sie mehr über die Erziehungsstellen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-9931e80 e-flex e-con-boxed e-con" data-id="9931e80" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-47a40d9 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="47a40d9" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-47a40d9" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="47a40d9">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="familiengruppen" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="familiengruppen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Familiengruppen</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="familiengruppen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="familiengruppen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3249" class="elementor elementor-3249 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-1aa90b90 e-flex e-con-boxed e-con" data-id="1aa90b90" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-2ca0bf4d e-con-full e-flex e-con" data-id="2ca0bf4d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-17c1cede elementor-widget elementor-widget-heading" data-id="17c1cede" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Familiengruppen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-4a6400cd elementor-widget elementor-widget-text-editor" data-id="4a6400cd" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>In einer Familiengruppe leben bis zu vier Kinder und Jugendliche.</p><p>Alle Familengruppen, die für Kompetenz für Menschen (KOM) tätig sind, haben zunächst als Erziehungsstellen mit uns zusammengearbeitet und konnten Erfahrungen und Kompetenzen erwerben, was das Zusammenleben mit Kindern angeht.</p><p>Familiengruppen sind professionell arbeitende Familien, in denen mindestens eine Person eine fachliche Ausbildung besitzt. Zudem werden sie durch eine zusätzliche Fachkraft unterstützt.</p><p>Sie werden durch qualifizierte FachberaterInnen in ihrer Arbeit begleitet und müssen sich fortlaufend weiterbilden. Sie sind betriebserlaubnispflichtig durch das Niedersächsische Landesamt für Familie, Soziales und Gesundheit.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/familiengruppen/">Erfahren Sie mehr über die Familiengruppen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-bfc6dd2 e-flex e-con-boxed e-con" data-id="bfc6dd2" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        <div class="elementor-element elementor-element-b9c07c8 elementor-widget__width-inherit elementor-widget-mobile_extra__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-widget elementor-widget-eael-adv-tabs" data-id="b9c07c8" data-element_type="widget" data-widget_type="eael-adv-tabs.default">
        <div class="elementor-widget-container">
            <div id="eael-advance-tabs-b9c07c8" class="eael-advance-tabs eael-tabs-horizontal  eael-tab-toggle active-caret-on" data-tabid="b9c07c8">
    <div class="eael-tabs-nav">
        <ul class="">
                                    <li id="familienanaloges-wohnen" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="familienanaloges-wohnen-tab" aria-expanded="false">
                    
                    
                    
                                                    <span class="eael-tab-title  title-after-icon">Familienanaloges Wohnen</span>                                                    </li>
                            </ul>
    </div>
    
    <div class="eael-tabs-content">
        
            <div id="familienanaloges-wohnen-tab" class="clearfix eael-tab-content-item inactive" data-title-link="familienanaloges-wohnen-tab">
                                                    <div data-elementor-type="loop-item" data-elementor-id="3255" class="elementor elementor-3255 e-loop-item e-loop-item-4603 post-4603 page type-page status-publish hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
                <div class="elementor-element elementor-element-2c97525f e-flex e-con-boxed e-con" data-id="2c97525f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
<div class="elementor-element elementor-element-74cefd59 e-con-full e-flex e-con" data-id="74cefd59" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
        <div class="elementor-element elementor-element-6c64dec8 elementor-widget elementor-widget-heading" data-id="6c64dec8" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Familienanaloges Wohnen</h2>		</div>
        </div>
        <div class="elementor-element elementor-element-2ec62aa6 elementor-widget elementor-widget-text-editor" data-id="2ec62aa6" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                    <p>Familienanaloges Wohnen ist eine neue Hilfeform, die gemeinsam mit dem Landkreis Peine entwickelt und inzwischen auch erfolgreich in den Landkreisen Peine und Gifhorn angewandt wird.</p><p>&nbsp;</p><p><a class="orange-link" href="https://dev-typografix.de/kom-bs/wordpress/familienanaloges-wohnen/">Erfahren Sie mehr über das familienanaloge Wohnen</a></p>						</div>
        </div>
        </div>
<div class="elementor-element elementor-element-14344221 e-flex e-con-boxed e-con" data-id="14344221" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
            <div class="e-con-inner">
            </div>
        </div>
            </div>
        </div>
                </div>
                                            </div>
                    </div>
</div>
</div>
        </div>
        </div>
        </div>

<script type="text/template" id="tmpl-elementor-templates-modal__header">
<div class="elementor-templates-modal__header__logo-area"></div>
<div class="elementor-templates-modal__header__menu-area"></div>
<div class="elementor-templates-modal__header__items-area">
<# if ( closeType ) { #>
    <div class="elementor-templates-modal__header__close elementor-templates-modal__header__close--{{{ closeType }}} elementor-templates-modal__header__item">
        <# if ( 'skip' === closeType ) { #>
        <span>Überspringen</span>
        <# } #>
        <i class="eicon-close" aria-hidden="true"></i>
        <span class="elementor-screen-only">Schließen</span>
    </div>
<# } #>
<div id="elementor-template-library-header-tools"></div>
</div>
</script>

<script type="text/template" id="tmpl-elementor-templates-modal__header__logo">
<span class="elementor-templates-modal__header__logo__icon-wrapper e-logo-wrapper">
<i class="eicon-elementor"></i>
</span>
<span class="elementor-templates-modal__header__logo__title">{{{ title }}}</span>
</script>
<script type="text/template" id="tmpl-elementor-finder">
<div id="elementor-finder__search">
<i class="eicon-search" aria-hidden="true"></i>
<input id="elementor-finder__search__input" placeholder="Lostippen, um alles in Elementor zu finden" autocomplete="off">
</div>
<div id="elementor-finder__content"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder-results-container">
<div id="elementor-finder__no-results">Keine Ergebnisse gefunden</div>
<div id="elementor-finder__results"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__category">
<div class="elementor-finder__results__category__title">{{{ title }}}</div>
<div class="elementor-finder__results__category__items"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__item">
<a href="{{ url }}" class="elementor-finder__results__item__link">
<div class="elementor-finder__results__item__icon">
    <i class="eicon-{{{ icon }}}" aria-hidden="true"></i>
</div>
<div class="elementor-finder__results__item__title">{{{ title }}}</div>
<# if ( description ) { #>
    <div class="elementor-finder__results__item__description">- {{{ description }}}</div>
<# } #>

<# if ( lock ) { #>
<div class="elementor-finder__results__item__badge"><i class="{{{ lock.badge.icon }}}"></i>{{ lock.badge.text }}</div>
<# } #>
</a>
<# if ( actions.length ) { #>
<div class="elementor-finder__results__item__actions">
<# jQuery.each( actions, function() { #>
    <a class="elementor-finder__results__item__action elementor-finder__results__item__action--{{ this.name }}" href="{{ this.url }}" target="_blank">
        <i class="eicon-{{{ this.icon }}}"></i>
    </a>
<# } ); #>
</div>
<# } #>
</script>
<link rel="stylesheet" id="elementor-preview-4668-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-4603.css?ver=1689755239" media="all">
<link rel="stylesheet" id="elementor-post-1073-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-1073.css?ver=1689684288" media="all">
<link rel="stylesheet" id="elementor-post-3203-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-3203.css?ver=1689684288" media="all">
<link rel="stylesheet" id="elementor-post-3213-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-3213.css?ver=1689684288" media="all">
<link rel="stylesheet" id="elementor-post-3233-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-3233.css?ver=1689684288" media="all">
<link rel="stylesheet" id="elementor-post-3249-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-3249.css?ver=1689684288" media="all">
<link rel="stylesheet" id="elementor-post-3255-css" href="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/elementor/css/post-3255.css?ver=1689684288" media="all">
<script id="elementor-web-cli-js-before">
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-json\/","assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"d2c95cd633","version":"3.14.1"};
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-json\/","assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"d2c95cd633","version":"3.14.1"};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/web-cli.min.js?ver=3.14.1" id="elementor-web-cli-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11" id="regenerator-runtime-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/vendor/react.min.js?ver=18.2.0" id="react-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/vendor/react-dom.min.js?ver=18.2.0" id="react-dom-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/hooks.min.js?ver=4169d3cf8e8d95a3d6d5" id="wp-hooks-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/dist/i18n.min.js?ver=9e794f35a71bb98672ae" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/js/notes/notes.min.js?ver=3.14.1" id="elementor-pro-notes-js"></script>
<script id="elementor-pro-notes-app-initiator-js-before">
var elementorNotesConfig = {"route":{"title":"Angebotsformen-copy","url":"\/kom-bs\/wordpress\/?p=4603","note_url_pattern":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-pro-notes-proxy&note-id={{NOTE_ID}}","post_id":4603,"is_elementor_library":false},"direction":"ltr","is_debug":false,"current_user_can":{"create":true,"create_users":true,"edit_users":true},"urls":{"admin_url_create_user":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/user-new.php","admin_url_edit_user":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/user-edit.php","avatar_defaults":{"24":"https:\/\/secure.gravatar.com\/avatar\/?s=24&d=mm&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/?s=48&d=mm&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/?s=96&d=mm&r=g"},"help_notes_features":"https:\/\/go.elementor.com\/app-notes"}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/js/notes/notes-app-initiator.min.js?ver=3.14.1" id="elementor-pro-notes-app-initiator-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=1.0.0" id="hello-theme-frontend-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js?ver=5.8.3" id="eael-general-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/essential-addons-elementor/eael-4603.js?ver=1689696967" id="eael-4603-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2" id="jquery-ui-core-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2" id="jquery-ui-mouse-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/jquery/ui/draggable.min.js?ver=1.13.2" id="jquery-ui-draggable-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/backbone.min.js?ver=1.4.1" id="backbone-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/lib/backbone/backbone.marionette.min.js?ver=2.4.5.e1" id="backbone-marionette-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/lib/backbone/backbone.radio.min.js?ver=1.0.4" id="backbone-radio-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/common-modules.min.js?ver=3.14.1" id="elementor-common-modules-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0" id="elementor-dialog-js"></script>
<script id="wp-api-request-js-extra">
var wpApiSettings = {"root":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-json\/","nonce":"d2c95cd633","versionString":"wp\/v2\/"};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/api-request.min.js?ver=6.2.2" id="wp-api-request-js"></script>
<script id="elementor-dev-tools-js-before">
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/dev-tools.min.js?ver=3.14.1" id="elementor-dev-tools-js"></script>
<script id="elementor-common-js-translations">
( function( domain, translations ) {
var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
localeData[""].domain = domain;
wp.i18n.setLocaleData( localeData, domain );
} )( "elementor", {"translation-revision-date":"2023-07-08 10:07:56+0000","generator":"GlotPress\/4.0.0-alpha.4","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"de"},"Enable and Import":["Aktivieren und importieren"],"The file exceeds the maximum upload size for this site.":["Die Datei \u00fcberschreitet die maximale Uploadgr\u00f6\u00dfe f\u00fcr diese Website."],"Uploading...":["Hochladen\u2026"],"Enable Unfiltered File Uploads":["Ungefilterte Dateiuploads aktivieren"],"Unable to connect":["Keine Verbindung m\u00f6glich"],"Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.":["Bevor du das ungefilterte Hochladen von Dateien aktivierst, beachte, dass diese Art von Dateien ein Sicherheitsrisiko bergen. Elementor f\u00fchrt zwar einen Prozess zur Entfernung von m\u00f6glichem b\u00f6sartigem Code aus, aber es besteht dennoch ein Risiko bei der Verwendung solcher Dateien."],"Finder":["Finder"],"Enable":["Aktivieren"],"Cancel":["Abbruch"]}},"comment":{"reference":"assets\/js\/common.js"}} );
</script>
<script id="elementor-common-js-before">
var elementorCommonConfig = {"version":"3.14.1","isRTL":false,"isDebug":false,"isElementorDebug":false,"activeModules":["ajax","finder","connect","event-tracker"],"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"landing-pages":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/","rest":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-json\/"},"filesUpload":{"unfilteredFiles":true},"library_connect":{"is_connected":false,"subscription_plans":[{"label":null,"promotion_url":null,"color":null},{"label":"Pro","promotion_url":"https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro","color":"#92003B"}],"base_access_level":0,"current_access_level":0},"ajax":{"url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin-ajax.php","nonce":"6ea2eefb9d"},"finder":{"data":{"edit":{"title":"Bearbeiten","dynamic":true,"name":"edit"},"general":{"title":"Generell","dynamic":false,"items":{"saved-templates":{"title":"Gespeicherte Templates","icon":"library-save","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=library","keywords":["template","section","page","library"]},"system-info":{"title":"System Info","icon":"info-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-system-info","keywords":["system","info","environment","elementor"]},"role-manager":{"title":"Benutzerrollen verwalten","icon":"person","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-role-manager","keywords":["role","manager","user","elementor"]},"knowledge-base":{"title":"Wissensdatenbank","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=go_knowledge_base_site","keywords":["help","knowledge","docs","elementor"]},"theme-builder":{"title":"Theme Builder","icon":"library-save","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor","keywords":["template","header","footer","single","archive","search","404","library"]},"kit-library":{"title":"Kit Bibliothek","icon":"kit-parts","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/kit-library","keywords":["kit library","kit","library","site parts","parts","assets","templates"]},"popups":{"title":"Popups","icon":"library-save","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup","keywords":["template","popup","library"]}},"name":"general"},"create":{"title":"Erstellen","dynamic":false,"items":{"page":{"title":"Neue Seitenvorlage hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=page&_wpnonce=fe7b3c9fd9","keywords":["Neue Seitenvorlage hinzuf\u00fcgen","post","page","template","new","create"]},"section":{"title":"Abschnitt hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=section","keywords":["Abschnitt hinzuf\u00fcgen","post","page","template","new","create"]},"container":{"title":"Container hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=stack&_wpnonce=fe7b3c9fd9","keywords":["Container hinzuf\u00fcgen","post","page","template","new","create"]},"wp-post":{"title":"Beitrag hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=post&template_type=wp-post&_wpnonce=fe7b3c9fd9","keywords":["Beitrag hinzuf\u00fcgen","post","page","template","new","create"]},"wp-page":{"title":"Seite hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=page&template_type=wp-page&_wpnonce=fe7b3c9fd9","keywords":["Seite hinzuf\u00fcgen","post","page","template","new","create"]},"landing-page":{"title":"Landingpage hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=e-landing-page&template_type=landing-page&_wpnonce=fe7b3c9fd9#library","keywords":["Landingpage hinzuf\u00fcgen","post","page","template","new","create"]},"popup":{"title":"Popup hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=popup","keywords":["Popup hinzuf\u00fcgen","post","page","template","new","create"]},"header":{"title":"Kopfzeile hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=header","keywords":["Kopfzeile hinzuf\u00fcgen","post","page","template","new","create"]},"footer":{"title":"Fu\u00dfzeile hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=footer","keywords":["Fu\u00dfzeile hinzuf\u00fcgen","post","page","template","new","create"]},"single":{"title":"Single hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=single","keywords":["Single hinzuf\u00fcgen","post","page","template","new","create"]},"single-post":{"title":"Single Post hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=single-post","keywords":["Single Post hinzuf\u00fcgen","post","page","template","new","create"]},"single-page":{"title":"Single Page hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=single-page&_elementor_template_sub_type=page","keywords":["Single Page hinzuf\u00fcgen","post","page","template","new","create"]},"archive":{"title":"Archiv hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=archive","keywords":["Archiv hinzuf\u00fcgen","post","page","template","new","create"]},"search-results":{"title":"Suchergebnisse hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=search-results&_elementor_template_sub_type=search","keywords":["Suchergebnisse hinzuf\u00fcgen","post","page","template","new","create"]},"error-404":{"title":"Error 404 hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=error-404&_elementor_template_sub_type=not_found404","keywords":["Error 404 hinzuf\u00fcgen","post","page","template","new","create"]},"code_snippet":{"title":"Custom Code hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post-new.php?post_type=elementor_snippet","keywords":["Custom Code hinzuf\u00fcgen","post","page","template","new","create"]},"loop-item":{"title":"Loop Item hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=fe7b3c9fd9&template_type=loop-item","keywords":["Loop Item hinzuf\u00fcgen","post","page","template","new","create"]},"theme-template":{"title":"Add New Theme Template","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor\/add-new","keywords":["template","theme","new","create"]},"loop-template":{"title":"Add New Loop Template","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=theme&elementor_library_type=loop-item#add_new","keywords":["template","theme","new","create","loop","dynamic","listing","archive","repeater"]}},"name":"create"},"site":{"title":"Website","dynamic":false,"items":{"homepage":{"title":"Homepage","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress","icon":"home-heart","keywords":["home","page"]},"wordpress-dashboard":{"title":"Dashboard","icon":"dashboard","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/","keywords":["dashboard","wordpress"]},"wordpress-menus":{"title":"Men\u00fcs","icon":"wordpress","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/nav-menus.php","keywords":["menu","wordpress"]},"wordpress-themes":{"title":"Themes","icon":"wordpress","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/themes.php","keywords":["themes","wordpress"]},"wordpress-customizer":{"title":"Customizer","icon":"wordpress","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/customize.php","keywords":["customizer","wordpress"]},"wordpress-plugins":{"title":"Plugins","icon":"wordpress","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/plugins.php","keywords":["plugins","wordpress"]},"wordpress-users":{"title":"Benutzer","icon":"wordpress","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/users.php","keywords":["users","profile","wordpress"]}},"name":"site"},"settings":{"title":"Einstellungen","dynamic":false,"items":{"general-settings":{"title":"Allgemeine Einstellungen","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor","keywords":["general","settings","elementor"]},"advanced":{"title":"Erweitert","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor#tab-advanced","keywords":["advanced","settings","elementor"]},"experiments":{"title":"Experimente","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor#tab-experiments","keywords":["settings","elementor","experiments"]},"custom-fonts":{"title":"Eigene Schriften","icon":"typography","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=elementor_font","keywords":["custom","fonts","elementor"]},"custom-icons":{"title":"Eigene Symbole","icon":"favorite","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=elementor_icons","keywords":["custom","icons","elementor"]}},"name":"settings"},"tools":{"title":"Werkzeuge","dynamic":false,"items":{"tools":{"title":"Werkzeuge","icon":"tools","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-tools","keywords":["tools","regenerate css","safe mode","debug bar","sync library","elementor"]},"replace-url":{"title":"URL ersetzen","icon":"tools","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-tools#tab-replace_url","keywords":["tools","replace url","domain","elementor"]},"maintenance-mode":{"title":"Wartungsmodus","icon":"tools","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-tools#tab-maintenance_mode","keywords":["tools","maintenance","coming soon","elementor"]},"import-export":{"title":"Import Export","icon":"import-export","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-tools#tab-import-export-kit","keywords":["tools","import export","import","export","kit"]},"version-control":{"title":"Versionskontrolle","icon":"time-line","url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-tools#tab-versions","keywords":["tools","version","control","rollback","beta","elementor"]}},"name":"tools"}}},"connect":[],"event-tracker":{"isUserDataShared":true}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/common.min.js?ver=3.14.1" id="elementor-common-js"></script>
<script id="elementor-app-loader-js-before">
var elementorAppConfig = {"menu_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor","assets_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/","pages_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/edit.php?post_type=page","return_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=4603&action=elementor","hasPro":true,"admin_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/","login_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/login\/","base_url":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1","site-editor":[],"import-export":[],"kit-library":[],"onboarding":[]};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/app-loader.min.js?ver=3.14.1" id="elementor-app-loader-js"></script>
<script id="eael-js-extra">
var localize = {"ajaxurl":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin-ajax.php","nonce":"5c20ac55fd","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/copy-js\/","cart_redirectition":"","cart_page_url":"","el_breakpoints":{"mobile":{"label":"Mobile Portrait","value":480,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":810,"default_value":880,"direction":"max","is_enabled":true},"tablet":{"label":"Tablet Portrait","value":1080,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1440,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Breitbild","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/uploads/essential-addons-elementor/eael.js?ver=1689696967" id="eael-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1" id="smartmenus-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.14.1" id="elementor-pro-webpack-runtime-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.14.1" id="elementor-webpack-runtime-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.14.1" id="elementor-frontend-modules-js"></script>
<script id="elementor-pro-frontend-js-before">
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin-ajax.php","nonce":"ccf60715e3","urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"de_DE","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.14.1" id="elementor-pro-frontend-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":true,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Auf Facebook teilen","shareOnTwitter":"Auf Twitter teilen","pinIt":"Anheften","download":"Download","downloadImage":"Bild downloaden","fullscreen":"Vollbild","zoom":"Zoom","share":"Teilen","playVideo":"Video abspielen","previous":"Zur\u00fcck","next":"Weiter","close":"Schlie\u00dfen","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":481,"lg":1081,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":480,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":810,"default_value":880,"direction":"max","is_enabled":true},"tablet":{"label":"Tablet Portrait","value":1080,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1440,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Breitbild","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.14.1","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"landing-pages":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper-container","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop"],"viewport_mobile":480,"viewport_mobile_extra":810,"viewport_tablet":1080,"viewport_laptop":1440,"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"title","hello_header_menu_layout":"horizontal","hello_footer_logo_type":"logo"},"post":{"id":4603,"title":"Angebotsformen-copy%20%E2%80%93%20Kompetenz%20f%C3%BCr%20Menschen","excerpt":"","featuredImage":false},"user":{"roles":["administrator"]}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.14.1" id="elementor-frontend-js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.14.1" id="pro-elements-handlers-js"></script><svg style="display: none;" class="e-font-icon-svg-symbols"></svg>
<script id="elementor-admin-bar-js-before">
var elementorAdminBarConfig = {"elementor_edit_page":{"id":"elementor_edit_page","title":"Mit Elementor bearbeiten","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=4603&action=elementor","children":{"990":{"id":"elementor_edit_doc_990","title":"Header Unterseiten","sub_title":"Kopfzeile","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=990&action=elementor"},"1073":{"id":"elementor_edit_doc_1073","title":"Angebotstab","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=1073&action=elementor"},"3203":{"id":"elementor_edit_doc_3203","title":"Amb","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=3203&action=elementor"},"3213":{"id":"elementor_edit_doc_3213","title":"jukos","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=3213&action=elementor"},"3233":{"id":"elementor_edit_doc_3233","title":"erziehungsstellen","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=3233&action=elementor"},"3249":{"id":"elementor_edit_doc_3249","title":"familiengruppen","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=3249&action=elementor"},"3255":{"id":"elementor_edit_doc_3255","title":"familienanalog","sub_title":"Loop Item","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=3255&action=elementor"},"50":{"id":"elementor_edit_doc_50","title":"Elementor Fu\u00dfzeile #50","sub_title":"Fu\u00dfzeile","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=50&action=elementor"},"3256":{"id":"elementor_site_settings","title":"Website-Einstellungen","sub_title":"Website","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/post.php?post=4603&action=elementor#e:run:panel\/global\/open","class":"elementor-site-settings","parent_class":"elementor-second-section"},"3257":{"id":"elementor_app_site_editor","title":"Theme Builder","sub_title":"Website","href":"https:\/\/dev-typografix.de\/kom-bs\/wordpress\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor","class":"elementor-app-link","parent_class":"elementor-second-section"}}}};
</script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-content/plugins/elementor/assets/js/elementor-admin-bar.min.js?ver=3.14.1" id="elementor-admin-bar-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/hoverintent-js.min.js?ver=2.2.1" id="hoverintent-js-js"></script>
<script src="https://dev-typografix.de/kom-bs/wordpress/wp-includes/js/admin-bar.min.js?ver=6.2.2" id="admin-bar-js"></script>



`;

tabsAuschalter();