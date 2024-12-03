import streamlit as st

# Set the page configuration
st.set_page_config(page_title="Streamlit App", layout="wide")

# Create a sidebar navigation
st.sidebar.title("Navigation")
nav_option = st.sidebar.radio("Go to", ["Home", "About", "Login", "Image Cards"])

# Home Page
if nav_option == "Home":
    st.title("Welcome to the Home Page")
    st.write("This is the homepage of the Streamlit app with navigation.")
    st.image("https://source.unsplash.com/random/800x400", caption="Random Image from Unsplash")

# About Page
elif nav_option == "About":
    st.title("About")
    st.write("This page contains information about the application.")

# Login Page
elif nav_option == "Login":
    st.title("Login Page")
    st.write("Enter your login credentials below.")
    username = st.text_input("Username")
    password = st.text_input("Password", type="password")
    if st.button("Login"):
        if username == "admin" and password == "password":
            st.success("Login successful!")
        else:
            st.error("Invalid credentials")

# Image Cards Page
elif nav_option == "Image Cards":
    st.title("Clickable Image Cards")

    # Three clickable image cards
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
