import React from 'react'

export default function Contact() {
  return (
    <>
  <div class="login-form-wrap">
		<div class="login-box">
			<div class="login-content-warp">
				<div class="profile-form">
					<img src="https://res.cloudinary.com/dzeznhbhc/image/upload/v1686724750/samples/cute-fantasy_1_jsf3ic.png" alt="women"/>
					<span class="profile-title">user login</span>
				</div>
				<form action="">
					<div class="email-input">
						<span class="email"><i class="fa-regular fa-envelope"></i> </span>
						<input type="text" placeholder="email address"/>
					</div>

					<div class="password-input">
						<span class="email"><i class="fa-solid fa-lock"></i></span>
						<input type="password" placeholder="password"/>
					</div>

					<div class="forget-link-warp">
						<div class="checkbox">
							<input type="checkbox"/>
							<span>keep me signed in</span>
						</div>
						<div>
							<span>forget your password</span>
						</div>
					</div>
				</form>

				<div class="social-icon">
					<a class="social-icon-warp" href="https://www.google.com/">
						<img src="https://res.cloudinary.com/dzeznhbhc/image/upload/v1686725283/samples/google-plus_1_dbtrqm.png" alt=""/>
						<span>Login google</span>
					</a>
				</div>

				<div class="butn-sign">
					<button>sign in</button>
				</div>
			</div>
		</div>
	</div>

    </>
  )
}
