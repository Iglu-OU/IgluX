export default function({ data }) {
    const { name, title, description, descriptionExtended, imageUrl, imageSrc, imageSecSrc, imageAlt } = data;

    return (
        <li className="team-member">
            <p className="team-member__portrait mt-0">
                <img className="team-member__portrait-primary" src={imageSrc} alt={imageAlt} />
                <img className="team-member__portrait-secondary" src={imageSecSrc} alt={imageAlt} />
            </p>
            <div className="team-member__description">
                <a className="team-member__name mt-0 h1" href={imageUrl} target="_blank">
                    <span>{name}</span>
                </a>
                <p className="team-member__title mt-0">
                    <span>{title}</span>
                </p>
                <p>{description}</p>
                <p>{descriptionExtended}</p>
            </div>
        </li>
    );
}
