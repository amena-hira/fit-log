# 🏋️ FitLog — Workout Library

## 📖 Description

FitLog is a responsive workout planning application where users can explore different workouts, view workout details, add exercises to today's plan, and save workouts for later. Users can also track total workout duration and calories from their plan.

## 🛠️ Technologies Used

- Next.js
- React.js
- JavaScript (JSX)
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- React Context API

## ✨ Features

- Browse workouts in a responsive workout library.
- View detailed information for each workout.
- Add workouts to **Today's Plan**.
- Save workouts for later in the **Saved** section.
- Dynamically update Plan and Saved counters in the navbar.
- Sort workouts by duration, calories, and rating.
- Remove workouts from Today's Plan or Saved list.
- View total exercises, minutes, and calories dynamically.
- Responsive design for mobile, tablet, and desktop.
- Toast notifications for user actions.

## 🌐 API

**All Workouts**
```text
https://api.api-store.workers.dev/api/fitlog
```

**Single Workout**
```text
https://api.api-store.workers.dev/api/fitlog/:id
```

## 🔗 Links

- **Live Site:** [FitLog Live]()

## 💻 How to Install and Run Locally

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fitlog.git
```

### 2. Go to the Project Folder

```bash
cd fitlog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open the following address in your browser:

```text
http://localhost:3000
```

## 🚀 Production Build

To create and run a production build:

```bash
npm run build
npm start
```