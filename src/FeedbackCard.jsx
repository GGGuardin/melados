function FeedbackCard({ proimg, name, feedback }){
    return <div className="mx-auto Feedback-card rounded-4xl border-2" data-aos="flip-right">
        <img src={proimg} className="feedback-img"/>
        <p className="feedback-text">{feedback}</p>
        <p className="feedback-name">{name}</p>
    </div>
}

export default FeedbackCard