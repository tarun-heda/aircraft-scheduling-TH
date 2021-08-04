Go to the following url to access the app in action: http://as-assignment.herokuapp.com/


Steps to run the application in local, if needed:

1. Make sure you have node and npm installed on the machine.
2. I have not included node_modules folder with the submission. You can install packages by using the command 'npm install' in the root folder on the command window.
3. Wait for installation to complete. After that, run command 'npm start' in the same command window.
4. This should start a local server on port 3000 in your default browser. If not, go to http://localhost:3000/ in your browser.
5. You can now start using the app.



Assumptions made:

1. Pagination is only done for 10 pages.
2. Only one Aircraft 'GABCD' is considered.
3. Used redux for state management.
4. Disabling invalid flights on every selection (based on time and arrival/departure locations).
5. Removing a selection will remove all the entries below them (except when you remove first entry) for rotation to remain consistent as a flight cannot teleport and cannot run empty.
6. Added hover over effect to show what a click action will do.
7. Utilization percentage is updated below aircraft name on every selection/removal.
8. Turnaround time is always set to 20 mins and is shown in purple. 
9. Remaining bar with no green and purple is unutilized. Set the background to grey to indicate that portion.
10. Extended the timeline bar to full width for better visibility instead of just under rotation list as shown in the mockups.
11. Test cases are not included to keep the effort within the limit.\