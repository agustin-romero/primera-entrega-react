import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, useEffect } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

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
                        /
                        <ProductAmount>$ {item.costItem} each</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                    </PriceDetail>
                    </Product>        
                    )
                    : <TitleCart>Tu carrito esta vacio</TitleCart>    
                }
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button variant="outlined">Verificar</Button>
                        </Summary>
                }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;