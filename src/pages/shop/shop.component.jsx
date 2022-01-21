import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/collection.preview/collection.preview.component';
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        };
        
    }
    render(){
        // const {collections}=this.state;
        return(
            <div className='shop-page'>
                {
                    this.state.collections.map(({id, ...otherSectionProps})=>(<div>{
                       <PreviewCollection key={id} {...otherSectionProps}/>}</div>))
                }

            </div>


        );
    }


}

export default ShopPage;