document.querySelector(".ask-joke").addEventListener("click", async () => {
    // Disable the button to prevent multiple clicks
    document.querySelector(".ask-joke").disabled = true;

    try {
        // Create the "asking" message div
        let newDiv = document.createElement("div");
        let newp = document.createElement("p");
        newp.textContent = "Hey Robot, tell me a joke?";
        newDiv.appendChild(newp);
        newDiv.setAttribute("class", "asking-chat");
        document.querySelector(".chat-box").appendChild(newDiv);

        // Create the "loading" robot response div
        let jokeDiv = document.createElement("div");
        let jokep = document.createElement("p");
        jokep.textContent = "Loading..."; // Safer than using innerHTML
        jokeDiv.appendChild(jokep);
        jokeDiv.setAttribute("class", "robo-chat");
        document.querySelector(".chat-box").appendChild(jokeDiv);

        // Fetch the joke from the API
        let joke = await generateJoke();

        // Update the robot's response with the joke
        jokep.textContent = joke;
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching joke:", error);

        // Display an error message in the chat box
        let errorDiv = document.createElement("div");
        let errorp = document.createElement("p");
        errorp.textContent = "Oops! Something went wrong. Please try again.";
        errorDiv.appendChild(errorp);
        errorDiv.setAttribute("class", "robo-chat");
        document.querySelector(".chat-box").appendChild(errorDiv);
    } finally {
        // Re-enable the button regardless of success or failure
        document.querySelector(".ask-joke").disabled = false;
    }
});

async function generateJoke() {
    try {
        // Fetch a joke from the API
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        console.log(res);   
        // Check if the response is OK
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Parse the JSON response
        const data = await res.json();
        return data.joke;
    } catch (error) {
        console.error("Error generating joke:", error);
        throw error; // Rethrow the error to handle it in the main function
    }
}