import React from 'react';
import ProductCard from '../Products/ProductsCard';

 function ListSearchProducts (props) {

		return (
			<div className="product-table">
				<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody> 
							{this.props.products.map((product, index) => <ProductCard key={index} id={product.id} name={product.name} price={product.price}/>)}
						</tbody>
				</table>
				
			</div>
		)
	
}

export default ListSearchProducts;
