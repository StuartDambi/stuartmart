import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <ul className="breadcrumb">
                        <li><a href="#"><i class="fa fa-home"></i></a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-login">

                                <div className="account-border">
                                    <div className="row">
                                        <div className="col-sm-6 new-customer">
                                            <div className="well">
                                                <h2><i class="fa fa-file-o" aria-hidden="true"></i> New Customer</h2>
                                                <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                                            </div>
                                            <div className="bottom-form">
                                                <a href="#" class="btn btn-default pull-right">Continue</a>
                                            </div>
                                        </div>

                                        <form action="#" method="post" enctype="multipart/form-data">
                                            <div class="col-sm-6 customer-login">
                                                <div class="well">
                                                    <h2><i class="fa fa-file-text-o" aria-hidden="true"></i> Returning Customer</h2>
                                                    <p><strong>I am a returning customer</strong></p>
                                                    <div class="form-group">
                                                        <label class="control-label " for="input-email">E-Mail Address</label>
                                                        <input type="text" name="email" value="" id="input-email" class="form-control" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label " for="input-password">Password</label>
                                                        <input type="password" name="password" value="" id="input-password" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="bottom-form">
                                                    <a href="#" class="forgot">Forgotten Password</a>
                                                    <input type="submit" value="Login" class="btn btn-default pull-right" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login