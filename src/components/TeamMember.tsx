export default function({ data }) {
    const { name, title, description, descriptionExtended, imageUrl, imageSrc, imageSecSrc, imageAlt } = data;

    return (
        <li className="team-member">
            <a href={imageUrl} target="_blank" className="team-member-content-wrapper">
                <p className="team-member__portrait mt-0">
                    <img className="team-member__portrait-primary" src={imageSrc} alt={imageAlt} />
                    <img className="team-member__portrait-secondary" src={imageSecSrc} alt={imageAlt} />
                </p>
                <div className="team-member__description">
                    <h3 className="team-member__name mt-0 h1">
                        <span>{name}</span>
                    </h3>
                    <p className="team-member__title mt-0">
                        <span>{title}</span>
                    </p>
                    <p>{description}</p>
                    <p>{descriptionExtended}</p>
                </div>
            </a>
        </li>
    );
}
