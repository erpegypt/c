// Copyright (c) 2023, test and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Custom Report"] = {
	"filters": [
		{
			"fieldname":"group_by",
			"label": __("Group By"),
			"fieldtype": "Select",
			"width": "80",
			"reqd": 1,
			"options": ["Warehouse", "Company"],
			"default": "Warehouse",
		},
		{
			"fieldname": "company",
			"label": __("Company"),
			"fieldtype": "Link",
			"width": "80",
			"options": "Company",
			"reqd": 1,
			"default": frappe.defaults.get_user_default("Company"),
			"depends_on": "eval: doc.group_by != 'Company'",
		},
		{
			"fieldname": "price_list",
			"label": __("Price List"),
			"fieldtype": "Link",
			"width": "80",
			"options": "Price List",
		}
	]
};
