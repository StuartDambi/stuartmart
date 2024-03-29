import React from 'react'
import { NavLink } from 'react-router-dom'

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <ul class="breadcrumb">
                        <li><NavLink to="/"><i class="fa fa-home"></i></NavLink></li>
                        <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                    </ul>

                    <div className="row">
                        <div id="content" className="col-sm-12">
                            <h2 class="title">Shopping Cart</h2>
                            <div className="table-responsive form-group">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td class="text-center">Image</td>
                                            <td class="text-left">Product Name</td>
                                            <td class="text-left">Model</td>
                                            <td class="text-left">Quantity</td>
                                            <td class="text-right">Unit Price</td>
                                            <td class="text-right">Total</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center"><a href="product.html"><img width="70px" src="image/catalog/demo/product/funiture/8.jpg" alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" class="img-thumbnail" /></a></td>
                                            <td class="text-left"><a href="product.html">Emasa rumas gacem</a><br />
                                            </td>
                                            <td class="text-left">Pt 001</td>
                                            <td class="text-left" width="200px">
                                                <div class="input-group btn-block quantity">
                                                    <input type="text" name="quantity" value="1" size="1" class="form-control" />
                                                    <span class="input-group-btn">
                                                        <button type="submit" data-toggle="tooltip" title="Update" class="btn btn-primary"><i class="fa fa-clone"></i></button>
                                                        <button type="button" data-toggle="tooltip" title="Remove" class="btn btn-danger" onClick=""><i class="fa fa-times-circle"></i></button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="text-right">$120.00</td>
                                            <td class="text-right">$120.00</td>
                                        </tr>
                                        <tr>
                                            <td class="text-center"><a href="product.html"><img width="70px" src="image/catalog/demo/product/funiture/10.jpg" alt="Xitefun Causal Wear Fancy Shoes" title="Xitefun Causal Wear Fancy Shoes" class="img-thumbnail" /></a></td>
                                            <td class="text-left"><a href="product.html">Comas samer rumas</a></td>
                                            <td class="text-left">Pt 002</td>
                                            <td class="text-left" width="200px">
                                                <div class="input-group btn-block quantity">
                                                    <input type="text" name="quantity" value="1" size="1" class="form-control" />
                                                    <span class="input-group-btn">
                                                    <button type="submit" data-toggle="tooltip" title="Update" class="btn btn-primary"><i class="fa fa-clone"></i></button>
                                                    <button type="button" data-toggle="tooltip" title="Remove" class="btn btn-danger" onClick=""><i class="fa fa-times-circle"></i></button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="text-right">$150.00</td>
                                            <td class="text-right">$150.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="subtitle no-margin">What would you like to do next?</h3>
                            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>

                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a href="#collapse-coupon" class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" aria-expanded="true">Use Coupon Code
                                                <i class="fa fa-caret-down"></i>
                                            </a>
                                        </h4>
                                    </div>

                                    <div id="collapse-coupon" class="panel-collapse collapse in" aria-expanded="true">
                                        <div class="panel-body">
                                            <label class="col-sm-2 control-label" for="input-coupon">Enter your coupon here</label>
                                            <div class="input-group">
                                                <input type="text" name="coupon" value="" placeholder="Enter your coupon here" id="input-coupon" class="form-control" />
                                                <span class="input-group-btn"><input type="button" value="Apply Coupon" id="button-coupon" data-loading-text="Loading..." class="btn btn-primary" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a href="#collapse-shipping" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">Estimate Shipping &amp; Taxes 
                                                
                                                <i class="fa fa-caret-down"></i>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse-shipping" class="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                        <div class="panel-body">
                                            <p>Enter your destination to get a shipping estimate.</p>
                                            <div class="form-horizontal">
                                                <div class="form-group required">
                                                    <label class="col-sm-2 control-label" for="input-country">District</label>
                                                    <div class="col-sm-10">
                                                        <select name="country_id" id="input-country" class="form-control">
                                                            <option value=""> --- Please Select --- </option>
                                                            <option value="244">rubaga</option>
                                                            <option value="1">wakiso</option>
                                                            <option value="2">kampala</option>
                                                            <option value="3">makindye</option>
                                                        </select>
                                                    </div>
                                                </div>-
                                                <div class="form-group required">
                                                    <label class="col-sm-2 control-label" for="input-zone">Region / State</label>
                                                    <div class="col-sm-10">
                                                        <select name="zone_id" id="input-zone" class="form-control">
                                                            <option value=""> --- Please Select --- </option>
                                                            <option value="3513">wakaliga</option>
                                                            <option value="3514">pacify</option>
                                                            <option value="3515">lubiri</option>
                                                            <option value="3516">mugalasi</option>
                                                            <option value="3517">wakaliwood</option>
                                                            <option value="3518">vinetea</option>
                                                            <option value="3519">mateete</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                    <button type="button" id="button-quote" data-loading-text="Loading..." class="btn btn-primary">Get Quotes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div id="collapse-voucher" class="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                    <div class="panel-body">
                                        <label class="col-sm-2 control-label" for="input-voucher">Enter your gift certificate code here</label>
                                        <div class="input-group">
                                            <input type="text" name="voucher" value="" placeholder="Enter your gift certificate code here" id="input-voucher" class="form-control" />
                                            <span class="input-group-btn">
                                                <input type="submit" value="Apply Gift Certificate" id="button-voucher" data-loading-text="Loading..." class="btn btn-primary" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-sm-4 col-sm-offset-8">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td class="text-right">
                                                <strong>Sub-Total:</strong>
                                            </td>
                                            <td class="text-right">$168.71</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">
                                                <strong>Flat Shipping Rate:</strong>
                                            </td>
                                            <td class="text-right">$4.69</td>
                                        </tr>
                                        -
                                        
                                        <tr>
                                            <td class="text-right">
                                                <strong>Total:</strong>
                                            </td>
                                            <td class="text-right">$2103.70</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="buttons">
                            <div class="pull-left"><a href="index.html" class="btn btn-primary">Continue Shopping</a></div>
                            <div class="pull-right"><a href="checkout.html" class="btn btn-primary">Checkout</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShoppingCart