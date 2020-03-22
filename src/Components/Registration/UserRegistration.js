import React, {Component} from 'react';

import { Button, Popover, Tooltip, DatePicker, Input, Radio } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons'

class UserRegistration extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const birthday = ("You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.");
        const gender = ("You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.");

        return (
            <div className="RegistrationForm" >
                <h4>Sign Up</h4>
                <p>It's quick and easy.</p>

                <div className="FormContainer" >
                    <div className='name'>
                        <Input size="large" placeholder="First name" />
                        <Input size="large" placeholder="Last name" />
                    </div>
                    <Input size="large" placeholder="Mobile number or email" />
                    <Input.Password size="large" placeholder="New password" />

                    <div className="birthday">
                        <DatePicker />
                        <Popover content={birthday} trigger="click">
                            <Tooltip placement="topLeft" title="Click for more information" arrowPointAtCenter>
                                <QuestionCircleTwoTone />
                            </Tooltip>
                        </Popover>
                    </div>

                    <div className="gender">
                    <Radio.Group>
                        <Radio value={'Male'}>Male</Radio>
                        <Radio value={"Female"}>Female</Radio>
                    </Radio.Group>
                        <Popover content={gender} trigger="click">
                            <Tooltip placement="topLeft" title="Click for more information" arrowPointAtCenter>
                                <QuestionCircleTwoTone />
                            </Tooltip>
                        </Popover>
                    </div>

                    <div className="terms">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                    </div>

                    <div>
                    <Button type="primary" size={"Large"}>
                        Sign Up
                    </Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserRegistration;