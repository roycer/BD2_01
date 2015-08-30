/*
* vista_orders:
*/

CREATE VIEW vista_orders AS SELECT customers.customer_first_name , customers.customer_middle_initial, customers.customer_last_name , orders.date_order_placed, orders.total_amount FROM orders INNER JOIN customers ON customers.customer_id=orders.customer_id WHERE orders.est_registro=1 ORDER BY orders.date_order_placed DESC

/*
* vista_invoices:
*/

CREATE VIEW vista_invoices AS SELECT customers.customer_first_name,customers.customer_middle_initial,customers.customer_last_name, orders.date_order_placed, orders.total_amount, invoices.invoice_date, invoices.invoice_details FROM invoices INNER JOIN orders ON invoices.order_id=orders.order_id INNER JOIN customers ON orders.customer_id=customers.customer_id WHERE invoices.est_registro=1

/*
* vista_customer:
*/

CREATE VIEW vista_customer AS SELECT customers.customer_last_name, customers.customer_first_name, customers.phone_number,customers.email_address FROM customers ORDER BY customers.customer_last_name ASC


/*
* vista_product:
*/

CREATE VIEW vista_product AS SELECT products.product_name, products.product_price, products.product_color, products.product_size, product_categories.product_type_description FROM products INNER JOIN product_categories ON product_categories.production_type_code = products.production_type_code WHERE products.est_registro = 1

/*
* vista_product_sold
*/
SELECT products.product_name, SUM(order_items.product_quantity) FROM order_items INNER JOIN products ON order_items.product_id = products.product_id GROUP BY products.product_name

SELECT products.product_name, SUM(invoice_line_items.product_quantity) FROM invoice_line_items INNER JOIN products ON invoice_line_items.product_id = products.product_id GROUP BY products.product_name

SELECT products.product_name, SUM(invoice_line_items.product_quantity) FROM invoice_line_items INNER JOIN products ON invoice_line_items.product_id = products.product_id INNER JOIN invoices ON invoice_line_items.invoice_number=invoices.invoice_number INNER JOIN financial_transactions ON financial_transactions.invoice_number=invoices.invoice_number WHERE products.est_registro=1 AND invoices.est_registro=1 GROUP BY products.product_name

CREATE VIEW vista_product_sold AS SELECT products.product_name, products.product_color, product_categories.product_type_description, SUM(invoice_line_items.product_quantity) AS sold FROM invoice_line_items INNER JOIN products ON invoice_line_items.product_id = products.product_id INNER JOIN product_categories ON products.production_type_code=product_categories.production_type_code INNER JOIN invoices ON invoice_line_items.invoice_number=invoices.invoice_number INNER JOIN financial_transactions ON financial_transactions.invoice_number=invoices.invoice_number WHERE products.est_registro=1 AND invoices.est_registro=1 GROUP BY products.product_name ORDER BY sold DESC

/*
* vista_product_categories
*/
CREATE VIEW vista_product_categories AS SELECT product_categories.product_type_description, product_categories.vat_rating, COUNT(products.product_id) AS products FROM product_categories INNER JOIN products ON products.production_type_code=product_categories.production_type_code WHERE products.est_registro=1 GROUP BY product_categories.production_type_code ORDER BY product_categories.product_type_description ASC