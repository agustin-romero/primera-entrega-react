import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, useEffect } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import { ShoppingCartOutlined } from "@material-ui/icons";
import { DeleteIcon } from '@mui/icons-material/Delete';
import './styles.css';

import FormatNumber from "../utils/FormatNumber";


const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart><ShoppingCartOutlined />Carrito<ShoppingCartOutlined /></TitleCart>
            <button variant="outlined" startIcon={<DeleteIcon />} onClick={test.removeList} className="buttonStyle">Borrar todos los productos</button>
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
                        <button variant="outlined" startIcon={<DeleteIcon />} onClick={() => test.deleteItem(item.idItem)} className="buttonStyle">Borrar producto</button>
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
                        <div className="summary">
                            <div className="summaryItem">
                                <span className="summaryItemText">Subtotal</span>
                                <span><FormatNumber number={test.calcSubTotal()} /></span>
                            </div>
                            <div type="total">
                                <span>Total</span>
                                <span><FormatNumber number={test.calcTotal()} /></span>
                            </div>
                            <button variant="outlined" className="buttonStyle">Verificar</button>
                        </div>
                }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;