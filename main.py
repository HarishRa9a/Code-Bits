import streamlit as st

# Set the page configuration
st.set_page_config(page_title="Streamlit App", layout="wide")

# Create a top navigation bar using HTML
def top_nav_bar():
    st.markdown(
        """
        <style>
        .nav-bar {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
        }
        .nav-bar a {
            margin: 0 15px;
            text-decoration: none;
            font-size: 18px;
            color: #333;
            font-weight: bold;
        }
        .nav-bar a:hover {
            color: #007BFF;
        }
        </style>
        <div class="nav-bar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#login">Login</a>
            <a href="#image-cards">Image Cards</a>
        </div>
        """,
        unsafe_allow_html=True,
    )

# Function to display different sections based on navigation
def display_section(section):
    if section == "Home":
        st.title("Welcome to the Home Page")
        st.write("This is the homepage of the Streamlit app with navigation.")
        st.image("https://source.unsplash.com/random/800x400", caption="Random Image from Unsplash")

    elif section == "About":
        st.title("About")
        st.write("This page contains information about the application.")

    elif section == "Login":
        st.title("Login Page")
        st.write("Enter your login credentials below.")
        username = st.text_input("Username")
        password = st.text_input("Password", type="password")
        if st.button("Login"):
            if username == "admin" and password == "password":
                st.success("Login successful!")
            else:
                st.error("Invalid credentials")

    elif section == "Image Cards":
        st.title("Clickable Image Cards")
        col1, col2, col3 = st.columns(3)

        with col1:
            st.markdown(
                f'<a href="https://www.google.com" target="_blank">'
                f'<img src="https://source.unsplash.com/random/300x300?sig=1" alt="Card 1" style="width:100%;border-radius:10px;"></a>',
                unsafe_allow_html=True
            )
            st.write("Card 1 - Google")

        with col2:
            st.markdown(
                f'<a href="https://www.wikipedia.org" target="_blank">'
                f'<img src="https://source.unsplash.com/random/300x300?sig=2" alt="Card 2" style="width:100%;border-radius:10px;"></a>',
                unsafe_allow_html=True
            )
            st.write("Card 2 - Wikipedia")

        with col3:
            st.markdown(
                f'<a href="https://www.github.com" target="_blank">'
                f'<img src="https://source.unsplash.com/random/300x300?sig=3" alt="Card 3" style="width:100%;border-radius:10px;"></a>',
                unsafe_allow_html=True
            )
            st.write("Card 3 - GitHub")

# Render the navigation bar
top_nav_bar()

# Render different sections based on the hash in the URL
hash = st.experimental_get_query_params().get("hash", ["home"])[0]

# Display content based on navigation
if hash == "about":
    display_section("About")
elif hash == "login":
    display_section("Login")
elif hash == "image-cards":
    display_section("Image Cards")
else:
    display_section("Home")
