/**
 * Displays a Bulma notification at the top of the page.
 * @param {string} message - The content of the notification.
 * @param {string} type - The Bulma color class (e.g., 'is-success', 'is-danger').
 * @param {number} [duration=5000] - Time in milliseconds before the notification auto-dismisses.
 */
export function showNotification(message: string, type = 'is-info', duration = 5000) {
    // 1. Create the container element for the notification
    const notificationContainer = document.createElement('div');
    
    // Add Bulma's 'notification' class and the specified type/color class
    notificationContainer.className = `notification ${type}`; 
    
    // 2. Add the dismissal button (the 'delete' button)
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    
    // Add the message content
    const messageNode = document.createTextNode(message);

    // 3. Assemble the notification structure
    notificationContainer.appendChild(deleteButton);
    notificationContainer.appendChild(messageNode);
   
    // 5. Append the notification to the document body
    document.getElementById('notificationContainer')?.appendChild(notificationContainer);

    // 6. Set up the dismissal logic
    
    // Dismiss on delete button click
    deleteButton.onclick = () => {
        notificationContainer.remove();
        clearTimeout(timerId); // Stop the auto-dismiss timer if it was running
    };

    // Auto-dismiss after the duration
    const timerId = setTimeout(() => {
        notificationContainer.remove();
    }, duration);
}