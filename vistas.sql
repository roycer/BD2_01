vista_orders:

SELECT customers.customer_first_name , customers.customer_middle_initial, customers.customer_last_name , orders.date_order_placed, orders.total_amount FROM orders INNER JOIN customers ON customers.customer_id=orders.customer_id ORDER BY orders.date_order_placed DESC


vista_invoices:

SELECT CONCAT(customers.customer_first_name,customers.customer_middle_initial,customers.customer_last_name) as customer, orders.date_order_placed, orders.total_amount, invoices.invoice_date, invoices.invoice_details FROM invoices INNER JOIN orders ON invoices.order_id=orders.order_id INNER JOIN customers ON orders.customer_id=customers.customer_id

vista_customer:

SELECT customers.customer_last_name, customers.customer_first_name, customers.phone_number,customers.email_address FROM customers ORDER BY `customers`.`customer_last_name` ASC