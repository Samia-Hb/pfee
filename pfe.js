<script>
    function sendMessage() {
      // Get user input
      var userInput = document.getElementById("chat-input").value;
      
      // Clear input field
      document.getElementById("chat-input").value = "";

      // Display user message
      var userMessageElement = document.createElement("div");
      userMessageElement.className = "user-message";
      userMessageElement.textContent = userInput;
      document.getElementById("chat-container").appendChild(userMessageElement);

      // Simulate bot response
      setTimeout(function() {
        var botMessageElement = document.createElement("div");
        botMessageElement.className = "bot-message";
        botMessageElement.textContent = "I'm a bot. How can I assist you further?";
        document.getElementById("chat-container").appendChild(botMessageElement);
      }, 500);
    }
  </script>