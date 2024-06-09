export interface Project {
    image: string;
    title: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        'image':
            'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fgram_news.jpg?alt=media&token=8297e071-398f-4f04-8aa1-4f8f58b96cd9',
        'title': 'GramNews',
        'description':
            '✦ GramNews is a Flutter-based news app offering the latest news from various categories with an Instagram-style user-friendly interface.\n✦ Features:\n  - News Screen with horizontal scroll for browsing latest news.\n  - Category selection on the Main Screen.\n  - Dark Mode/Light Mode toggle.\n  - Persistent theme selection.\n  - Search news by keywords.\n  - Saved news accessible via the app name "GramNews".\n  - Save and read more options for news articles.',
        'link': 'https://github.com/Ultranmus/News-Flutter-App'
    },
    {
        'image':
            "https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Funizone.png?alt=media&token=c411ce55-3b52-4511-8d26-b7bd5e8d0784",
        'title': 'UNIZONE',
        'description':
            '✦ Developed a robust social media platform using Android Java and XML .\n✦ Implemented key features like follow/follow back, post sharing, real-time chat, moments (stories), liking posts, commenting, and replying to comments. \n✦ Utilized Firestore for seamless real-time updates, eliminating the need for manual refresh. \n✦ Designed an intuitive and user-friendly interface with enhanced browsing capabilities in the chat, facilitating quick search and comprehension of difficult abbreviations',
        'link': 'https://github.com/Ultranmus/UNIZONE-Social-Media-App'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fballon_burst.png?alt=media&token=4ef5f924-10e4-478b-8b79-8444eeca85ba',
        'title': 'Balloon Burst',
        'description':
            '✦ "Balloon Burst" is a thrilling Flutter mobile game featuring endless gameplay. Players pop balloons to earn points, accompanied by satisfying pop sounds. Balloons rise from the bottom, and when popped, they trigger dynamic balloon movement as new balloons take their place. Vibrant graphics enhance the visually appealing experience.\n✦ Endless Gameplay: Enjoy non-stop fun with an endless mode that keeps the game going as long as you want.\n✦ Pop Balloons: Tap on balloons to burst them and earn points. Score by popping balloons matching the displayed toast.\n✦ Sound Effects: Hear a delightful "pop" sound when you burst a matching color balloon.\n✦ Dynamic Balloon Movement: Popped balloons trigger others to rise in their place, creating a dynamic and challenging experience.\n✦ Vibrant Graphics: Enjoy colorful and visually appealing graphics.',
        'link': 'https://github.com/Ultranmus/Flutter-Balloon-Burst-Game'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fballon_pop.jpeg?alt=media&token=be67dadb-d803-4588-baef-1e79e59ec9b4',
        'title': 'Balloon Pop',
        'description':
            '✦ Balloon Pop is a 60-second Flutter mobile game with a challenging twist.\n✦ Pop balloons as they rise from the bottom of the screen.\n✦ Your goal is to pop the correct balloon based on the displayed toast message.\n✦ Challenging Gameplay: Test your reflexes and decision-making skills.\n✦ Pop Balloons: Tap on the balloons to burst them and earn points.\n✦ Sound Effects: Enjoy a satisfying "pop" sound when you burst a matching color balloon.\n✦ Limited Time: The game lasts for 60 seconds only.\n✦ Score Display: Track your score while playing and at the end of the game.\n✦ Restart Button: Press the "Restart" button to play again and beat your previous score.\n',
        'link': 'https://github.com/Ultranmus/Flutter-Balloon-Pop-Game'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fquiz_app.jpeg?alt=media&token=840eadab-7c16-436a-97dc-1a596020ae77',
        'title': 'Quiz Frontend',
        'description':
            '✦ QuizApp is a cross-platform Flutter quiz app.\n✦ Features include custom app icon and native splash screen.\n✦ Home Screen features:\n  - Add questions to the database.\n  - Display and filter questions by categories.\n  - Create quizzes with random questions.\n  - Take quizzes by ID or title.\n  - Create custom quizzes.\n✦ Add Question:\n  - Select category and difficulty.\n  - Provide question, options, and answer.\n✦ Show All Questions:\n  - Display and filter all questions by category.\n✦ Create Custom Quiz:\n  - Create custom quizzes by selecting questions.\n  - Give quizzes titles.\n✦ Create Quiz with Random Questions:\n  - Select category, title, and specify the number of questions.\n  - Generate quizzes with random questions.\n✦ Take Quiz by ID or Title:\n  - Enter quiz ID or title to access quizzes.\n  - Submit answers and view scores.\n✦ Note: Multiple quizzes with the same title display the first created quiz.',
        'link': 'https://github.com/Ultranmus/Quiz-App-Flutter-Frontend'
    },
    {
        'image':
            'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fquiz_app.jpeg?alt=media&token=840eadab-7c16-436a-97dc-1a596020ae77',
        'title': 'Quiz Backend',
        'description':
            '✦ QuizApp Spring Boot Backend is the API for the QuizApp Flutter quiz app.\n✦ Features include various RESTful API endpoints, database integration, quiz management, user authentication, and error handling.\n✦ API Endpoints:\n  - /questions/allQuestions: Get all questions from the database.\n  - /questions/add: Add questions to the database.\n  - /quiz/get/{quizId}: Get questions belonging to a quiz by quiz ID.\n  - /quiz/create: Create random quizzes with category, number of questions, and a title.\n  - /quiz/createCustom/{title}: Create custom quizzes with question IDs and a title.\n  - /quiz/submit/{quizId}: Check and score correct answers selected by the user.\n  - /quiz/get/title/{quizId}: Get quiz title by quiz ID.\n  - /quiz/get/id/{quizTitle}: Get quiz ID by quiz title.\n✦ Database Integration: Integrated with PostgreSQL for storing and retrieving quiz data.\n✦ Quiz Management: Create, read, and score quizzes and questions.\n✦ User Authentication: Secure endpoints using user authentication with custom filter and api-key.\n✦ Error Handling: Comprehensive error handling for informative responses.',
        'link': 'https://github.com/Ultranmus/Quiz-App-Spring-Boot-Backend'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fe_domain.jpeg?alt=media&token=0358e3c4-568c-40aa-adf6-5b7dff371060',
        'title': 'e-Domain',
        'description':
            '✦ Developed user-friendly eLearning platform using Android Java and Firestore.\n✦ Implemented study material uploads and viewing (PDFs, videos).\n✦ Enabled material preview for quality assurance before uploading.\n✦Incorporated course search and display of top courses.\n✦ Created KidsZone with admin-uploadable content for children(e.g., Panchatantra stories).\n✦ Designed user profiles for personalized experience.\n✦ Leveraged Firestore for efficient data management.',
        'link': 'https://github.com/Ultranmus/e-Learning-App'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fduo_link.jpeg?alt=media&token=b301c6d8-b023-4e38-8109-6bee09d7a946',
        'title': 'DuoLink',
        'description':
            "✦ Developed DuoLink, a chatting app, with secure communication features.\n✦ Integrated Google Firebase phone number authentication for seamless login.\n✦ Implemented OTP verification for secure phone number validation.\n✦ Utilized Riverpod for efficient state management.\n✦ Enabled initiation of new chats with registered contacts.\n✦ Displayed existing chats with profile pictures, names, and last messages.\n✦ Supported media sharing, including text, audio, video, GIFs, and emojis.\n✦ Packages used: image_picker, flutter_contacts, uuid, cached_network_image, cached_video_player, emoji_picker_flutter, enough_giphy_flutter, flutter_sound, permission_handler, path_provider, audioplayers.",
        'link': 'https://github.com/Ultranmus/DuoLink'
    },
    {
        'image':
            'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Forigin.jpeg?alt=media&token=d1a28f65-983f-4413-861f-2f81710605d7',
        'title': 'Origin',
        'description':
            '✦ Developed user-friendly browser app using WebView technology.\n✦ Integrated search bar with Google Mic for voice search.\n✦ Implemented local history storage for enhanced privacy.\n✦ Enabled bookmarking and desktop mode for convenience.\n✦ Incorporated incognito search for private browsing.\n✦ Prioritized user data security by not saving history in the cloud.',
        'link': 'https://github.com/Ultranmus/Origin-Browser-App'
    },
    {
        'image': 'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fcarousel.png?alt=media&token=0ea35ebc-c26a-4e58-ba55-940a9ec5b75f',
        'title': 'Infinite Carousel',
        'description':
            '✦ "Infinite Overlapping Carousel" is a Flutter project extending the "overlapped_carousel" package to enable infinite horizontal scrolling of widgets.\n✦ Overview: It builds upon the "overlapped_carousel" package, allowing visually appealing and interactive carousels with seamless looping of items.\n✦ Features:\n  - Infinite scrolling: Scroll through widgets infinitely without reaching the end.',
        'link': 'https://github.com/Ultranmus/Infinite-Overlapping-Carousel'
    },
    // {
    //     'image':
    //         'https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/portfolio%2Fprojects%2Fhostel_hub.webp?alt=media&token=acb5c1b1-5fe8-4050-a9fb-06c2bbf69705',
    //     'title': 'Hostel Hub',
    //     'description':
    //         "✦ Developed comprehensive hostel management app with three modules: Admin, Hosteller, and Staff.\n✦ Admin module: Complete control over hostel details and hostellers' accounts.\n✦ Admin module: Monitor check-in/check-out timings and track mess attendance.\n✦ Hosteller module: Individual hostellers can conveniently view their timings.\n✦ Staff module: Update timings, mark attendance, and manage day-to-day operations.\n✦ Promoted effective communication, coordination, and enhanced hostel management.",
    //     'link': ''
    // },
];
