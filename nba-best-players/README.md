# NBA Best Players Project

This project is designed to display the best NBA players along with their historically best games. It is built using Java for the backend logic and HTML/CSS for the frontend presentation.

## Project Structure

```
nba-best-players
├── src
│   ├── Main.java          # Entry point of the application
│   ├── data
│   │   └── players.json   # JSON data of NBA players and their best games
│   ├── templates
│   │   ├── index.html     # HTML template for displaying players
│   │   └── styles.css     # CSS styles for the HTML template
├── README.md              # Project documentation
└── build.gradle           # Gradle build configuration
```

## Getting Started

### Prerequisites

- Java Development Kit (JDK) 8 or higher
- Gradle 6.0 or higher

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nba-best-players
   ```

2. Build the project using Gradle:
   ```
   gradle build
   ```

### Running the Application

To run the application, execute the following command:
```
gradle run
```

### Usage

Once the application is running, open your web browser and navigate to `http://localhost:8080` to view the list of the best NBA players and their best games.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.