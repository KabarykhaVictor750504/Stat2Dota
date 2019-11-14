new Vue({
    el: '#app1',
    data: {},
    created() {
      this.connect();
    },
    methods: {
        getData: function() {
            this.sendMessage(this.getQueryVariable('cmd'))
            this.sendMessage(this.getQueryVariable('inf'))
        },
        getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            console.log('Query variable %s not found', variable);
        },
        connect () {
            var socket = new SockJS('/ws');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, this.onConnected, this.onError);
        },
        onConnected() {
            // Subscribe to the Public Topic
            stompClient.subscribe('/topic/public', this.onMessageReceived);
            stompClient.send("/app/chat.addUser",
                {},
                JSON.stringify({sender: '123', type: 'JOIN'})
            )
            this.getData()
        },
        sendMessage(msg) {
            stompClient.send('/topic/public', {}, msg);
        },
        onMessageReceived(payload) {
            var message = {
                sender: this.getQueryVariable('cmd'),
                content: this.getQueryVariable('inf'),
                type: 'CHAT'
            }
            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));

        }
    }
})