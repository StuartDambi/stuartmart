import React from 'react'
import LoggedInAside from '../../Constants/LoggedInAside/LoggedInAside'

class GiftVoucher extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <ul className="breadcrumb">
                        <li><a href="!#"><i class="fa fa-home"></i></a></li>
			            <li><a href="!#">Gift Voucher</a></li>
                    </ul>

                    <div className="row">
                        <div id="content" className="col-sm-9">
                            <h2 class="title">Purchase a Gift Card</h2>
                            <p>This gift card will be emailed to the recipient after your order has been paid for.</p>

                            <form action="" className="form-horizontal">
                                <div class="form-group required">
                                    <label for="input-to-name" class="col-sm-2 control-label">Recipient's Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="input-to-name" value="" name="to_name" />
                                    </div>
                                </div>
                                <div class="form-group required">
                                    <label for="input-to-email" class="col-sm-2 control-label">Recipient's e-mail</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="input-to-email" value="" name="to_email" />
                                    </div>
                                </div>
                                <div class="form-group required">
                                    <label for="input-from-name" class="col-sm-2 control-label">Your Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="input-from-name" value="" name="from_name" />
                                    </div>
                                </div>
                                <div class="form-group required">
                                    <label for="input-from-email" class="col-sm-2 control-label">Your e-mail</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="input-from-email" value="" name="from_email" />
                                    </div>
                                </div>
                                <div class="form-group required">
                                    <label class="col-sm-2 control-label">Gift Certificate Theme</label>
                                    <div class="col-sm-10">
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="8" name="voucher_theme_id" /> General
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="7" name="voucher_theme_id" /> Birthday
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="6" name="voucher_theme_id" /> Christmas
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="input-message" class="col-sm-2 control-label"><span title="" data-toggle="tooltip" data-original-title="Optional">Message</span>
                                    </label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" id="input-message" rows="5" cols="40" name="message"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-amount" class="col-sm-2 control-label"><span title="" data-toggle="tooltip" data-original-title="Card value can range from between $10.00 and $1,000.00">Amount</span>
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="text" size="5" class="form-control" id="input-amount" value="10" name="amount" />
                                    </div>
                                </div>
                                <div class="buttons clearfix">
                                    <div class="pull-right">I understand that gift certificates are non-refundable.
                                        <input type="checkbox" value="1" name="agree" /> &nbsp;
                                        <input type="submit" class="btn btn-primary" value="Continue" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <LoggedInAside />
                    </div>
                </div>
            </div>
        )
    }
}
export default GiftVoucher