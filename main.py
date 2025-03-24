from flask import Flask, render_template, url_for, redirect, request, flash, get_flashed_messages
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import random
from database import Database

app = Flask(__name__)
app.config['SECRET_KEY'] = 'AUHDSBKJDHWROIRUGYSHBCGBJ'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
database = Database()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    job_title = db.Column(db.String(250), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    skills = db.Column(db.String(250), nullable=False)
    location = db.Column(db.String(250), nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)


with app.app_context():
    db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/signup', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password_hash = request.form['password']
        job_title = request.form['job-title']
        location = request.form['location']
        phone = request.form['phone']
        skills = request.form['skills']
        firstname = request.form['firstname']
        lastname = request.form['lastname']

        print(job_title, location, phone, skills)
        
        # Check if user already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash('Email already exists! Please log in.', 'danger')
            return redirect(url_for('login'))

        # Hash the password
        hashed_password = generate_password_hash(password_hash)

        # Create new user
        new_user = User(username=username, email=email, password_hash=hashed_password, job_title=job_title, phone=phone, skills=skills, location=location, firstname=firstname, lastname=lastname)
        db.session.add(new_user)
        db.session.commit()
        
        flash('Account created! You can now log in.', 'success')
        return redirect(url_for('login'))

    return render_template('signup.html')

@app.route('/login', methods=["GET", "POST"])
def login():
    
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        # Check if user already exists
        existing_user = User.query.filter_by(email=email).first()
        if not existing_user:
            flash('Email does not exists! Please sign up.', 'danger')
            return redirect(url_for('sign_up'))
        

        if check_password_hash(existing_user.password_hash, password):
            login_user(existing_user)
           
            flash('Login successful.', 'success')
            return redirect(url_for('home'))
        else:
            flash('Incorrect email or password')
    return render_template('login.html')

@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    flash('Log out successful.', 'success')
    return redirect(url_for('home'))



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/home/handyman', methods=['GET', 'POST'])
def browse():
    all_artisans = database.all_artisans
    return render_template('browse.html', all_artisans=all_artisans)

@app.route('/services', methods=['GET', 'POST'])
def services():
    return render_template('services.html')

@app.route('/dashboard/inbox', methods=['GET', 'PSOT'])
@login_required
def inbox():
    return render_template('inbox.html')

@app.route('/dashboard/review', methods=['GET', 'PSOT'])
@login_required
def review():
    return render_template('review.html')

@app.route('/dashboard/analytics', methods=['GET', 'PSOT'])
@login_required
def analytics():
    return render_template('analytics.html')

@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/add/jobs', methods=['GET', 'POST'])
@login_required
def jobs():
    return render_template('addjob.html')

@app.route('/jobs/search', methods=['GET', 'POST'])
@login_required
def findjob():
    return render_template('findjob.html')

@app.route('/jobs/availabelz', methods=['GET', 'POST'])
@login_required
def availablejob():
    return render_template('availablejob.html')

@app.route('/settings', methods=['GET', 'POST'])
@login_required
def settings():
    return render_template('settings.html')

@app.route('/profile', methods=['GET', 'POST'])
@login_required
def profile():
    return render_template('profile.html')


@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('about.html')

@app.route('/view/jobs', methods=['GET', 'POST'])
def viewjobs():
    return render_template('viewjobs.html')

if __name__ == "__main__":
    app.run(debug=False, host="localhost", port=5000)