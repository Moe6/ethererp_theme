import frappe

def execute():
    """Install the EtherErp Website Theme"""
    
    # Check if theme already exists
    if frappe.db.exists("Website Theme", "ethererp_theme"):
        return
    
    # Create the Website Theme record
    theme = frappe.get_doc({
        "doctype": "Website Theme",
        "name": "ethererp_theme",
        "title": "EtherErp Theme",
        "description": "Brand + UI for EtherErp (Circuit Auto) web presence",
        "is_standard": 1,
        "theme": {
            "primary_color": "#0070B8",
            "secondary_color": "#6B7280", 
            "accent_color": "#dc2626",
            "text_color": "#111827",
            "light_color": "#F6F7FB",
            "dark_color": "#111827",
            "background_color": "#ffffff",
            "font_family": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        },
        "custom_css": "/assets/ethererp_theme/css/ethererp.bundle.css",
        "custom_js": "/assets/ethererp_theme/js/ethererp.bundle.js",
        "module": "ethererp_theme",
        "app": "ethererp_theme"
    })
    
    theme.insert(ignore_permissions=True)
    frappe.db.commit()
    
    print("EtherErp Website Theme installed successfully!")
