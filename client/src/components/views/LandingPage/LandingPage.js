import React from 'react'
import { FaCode } from "react-icons/fa";
import { Button } from 'antd';

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's use Kanban board!</span>
                <div>
                    <Button type="primary" style={{ marginRight: '10px'}}>
                        <a href="/login">Sign in</a>
                    </Button>
                    <Button type="primary" style={{ minWidth: '30%' }}>
                    <a href="/register">Sign up</a>
                    </Button>
                </div>

            </div>

        </>
    )
}

export default LandingPage
