-- Adding some users to get started
INSERT INTO users (username, email) VALUES
('JohnDoe', 'johndoe@example.com'),
('JaneSmith', 'janesmith@example.com');

-- Initializing a couple of projects
INSERT INTO projects (user_id, project_name, description) VALUES
(1, 'Website Overhaul', 'Revamping our company website'),
(2, 'Mobile App Creation', 'Building an exciting new mobile app');

-- Introducing some tasks for these projects
INSERT INTO tasks (project_id, task_name, due_date, status) VALUES
(1, 'Design Homepage Layout', '2023-10-10', 'underway'),
(1, 'Backend Development', '2023-10-20', 'pending'),
(2, 'Craft App User Interface', '2023-11-01', 'underway'),
(2, 'Initiate App Testing', '2023-11-15', 'pending');

-- Sharing thoughts through task comments
INSERT INTO comments (task_id, user_id, comment_text) VALUES
(1, 1, 'The design is nearing completion. Just a few color choices left.'),
(2, 2, 'Back-end development kicks off next week.'),
(3, 2, 'The UI design is really taking shape. Seeking feedback.'),
(4, 1, 'The testing phase should encompass both alpha and beta releases.');
