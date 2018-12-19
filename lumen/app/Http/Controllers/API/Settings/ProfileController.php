<?php

namespace App\Http\Controllers\API\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdateProfileRequest;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\Settings\UpdateProfileRequest $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfileRequest $request)
    {
        $user = $request->user();

        return tap($user)->update($request->only('name', 'email'));
    }
}
