import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    console.log(test);

    return (
        <WrapperCart>
            <TitleCart>Carrito</TitleCart>
            <Button variant="outlined" onClick={test.removeList}>Borrar todos los productos</Button>
            <ContentCart>
                {
                    test.cartList.lenght > 0 ?
                    test.cartList.map(item =>
                    <Product key={item.idItem}>
                    <ProductDetail>
                        <ImageCart src={item.imgItem} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.nameItem}
                        </span>
                        <Button variant="outlined" onClick={() => test.deleteItem(item.idItem)}>Borrar producto</Button>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ {item.costItem} each</ProductPrice>
                    </PriceDetail>
                    </Product>        
                    )
                    : <TitleCart>Tu carrito esta vacio</TitleCart>    
                }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;