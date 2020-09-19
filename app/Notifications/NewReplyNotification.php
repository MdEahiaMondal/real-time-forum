<?php

namespace App\Notifications;

use App\Http\Resources\ReplayResource;
use App\Models\Replay;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewReplyNotification extends Notification
{
    use Queueable;

    public $reply;

    /**
     * Create a new notification instance.
     *
     * @param Replay $replay
     */
    public function __construct(Replay  $replay)
    {
        $this->reply = $replay;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'replyBy' => $this->reply->user->name,
            'question' => $this->reply->question->title,
            'path' => $this->reply->question->path
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'replyBy' => $this->reply->user->name,
            'question' => $this->reply->question->title,
            'path' => $this->reply->question->path,
            'reply' => new ReplayResource($this->reply)
        ]);
    }
}
