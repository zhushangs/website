import React from 'react';
import { Anchor} from 'antd';

const { Link } = Anchor;

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <Anchor targetOffset="65">
                    <Link href="#main" title="Main" />
                    <Link href="#about" title="About" />
                    <Link href="#experience" title="Experience" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
      </div>
    );
}

export default AppHeader;

